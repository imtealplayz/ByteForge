(() => {
  'use strict';

  const AGENT_API = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
  const OFFICIAL_MEDIA_SCRIPT = 'https://raw.githubusercontent.com/michealdoolittle-cyber/Rankedcoach/ae7b0d3f86ac1b7da37ed561f6f126dcaab0e70d/public/library/gamesense-official-media.js';
  const root = document.querySelector('#agentShowcase');
  if (!root) return;

  const slug = (value = '') => String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  let media = null;
  let observer = null;

  function startPingPong(video) {
    let direction = 1;
    let running = false;
    let frame = 0;
    let last = 0;

    const tick = (now) => {
      if (!running) return;
      if (!video.duration || !Number.isFinite(video.duration)) {
        frame = requestAnimationFrame(tick);
        return;
      }

      if (!last) last = now;
      const elapsed = Math.min((now - last) / 1000, 0.05);
      last = now;
      const step = elapsed * 1.15;
      let next = video.currentTime + (direction * step);

      if (next >= video.duration - 0.02) {
        direction = -1;
        next = Math.max(0, video.duration - 0.02);
      } else if (next <= 0.02) {
        direction = 1;
        next = 0.02;
      }

      try { video.currentTime = next; } catch (_) {}
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      last = 0;
      cancelAnimationFrame(frame);
    };

    return { start, stop };
  }

  function addPreview(card, src) {
    if (!src || card.querySelector('.ability-preview-wrap')) return;

    const wrap = document.createElement('div');
    wrap.className = 'ability-preview-wrap';

    const video = document.createElement('video');
    video.className = 'ability-preview';
    video.src = src;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', `${card.querySelector('h4')?.textContent || 'Ability'} gameplay preview`);
    video.setAttribute('disablepictureinpicture', '');

    const poster = card.querySelector('.ability-icon img')?.src;
    if (poster) video.poster = poster;

    const source = document.createElement('a');
    source.className = 'ability-video-source';
    source.href = `https://playvalorant.com/en-us/agents/${slug(document.querySelector('.agent-feature-label h3')?.textContent || '')}/`;
    source.target = '_blank';
    source.rel = 'noreferrer';
    source.textContent = 'RIOT OFFICIAL CLIP ↗';

    wrap.append(video, source);
    card.prepend(wrap);

    const controller = startPingPong(video);
    video.addEventListener('loadedmetadata', () => {
      try { video.currentTime = 0.02; } catch (_) {}
    }, { once: true });

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const control = entry.target.__pingPong;
          if (!control) continue;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) control.start();
          else control.stop();
        }
      }, { threshold: [0, 0.2, 0.5] });
    }

    video.__pingPong = controller;
    observer.observe(video);
  }

  function enhance() {
    if (!media) return;
    const agentName = root.querySelector('.agent-feature-label h3')?.textContent?.trim();
    if (!agentName) return;

    const agentId = slug(agentName);
    const agentMedia = media[agentId] || {};

    root.querySelectorAll('.ability-card').forEach((card) => {
      const abilityName = card.querySelector('h4')?.textContent?.trim();
      if (!abilityName) return;
      const source = agentMedia[slug(abilityName)];
      if (source?.src) addPreview(card, source.src);
    });

    if (!root.querySelector('.ability-media-credit')) {
      const p = document.createElement('p');
      p.className = 'ability-media-credit';
      p.textContent = 'Ability previews are sourced from the corresponding official Riot agent pages.';
      root.querySelector('.showcase-main')?.appendChild(p);
    }
  }

  function loadScript() {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-byteforge-official-media]');
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        if (window.RankedCoachGamesenseOfficialMedia) resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = OFFICIAL_MEDIA_SCRIPT;
      script.async = true;
      script.dataset.byteforgeOfficialMedia = 'true';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function init() {
    try {
      const response = await fetch(AGENT_API);
      if (!response.ok) throw new Error('agent API unavailable');
      const payload = await response.json();
      const agents = (payload.data || []).filter(a => a.isPlayableCharacter);

      window.RankedCoachGamesenseReference = {
        agents: agents.map(agent => ({
          id: slug(agent.displayName),
          label: agent.displayName,
          abilities: (agent.abilities || []).filter(a => a.displayName).map(ability => ({
            id: slug(ability.displayName),
            name: ability.displayName
          }))
        }))
      };

      await loadScript();
      media = window.RankedCoachGamesenseOfficialMedia || {};
      enhance();

      const mutationObserver = new MutationObserver(() => requestAnimationFrame(enhance));
      mutationObserver.observe(root, { childList: true, subtree: true });
    } catch (_) {
      // The normal ByteForge ability cards remain fully usable if the external media source is unavailable.
    }
  }

  init();
})();
