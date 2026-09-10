const agents=[
['Astra','Controller','Global space control','Cosmic Divide and Astral Form reward planning, timing, and team coordination.'],
['Breach','Initiator','Flash + disruption','Create safe entries by forcing defenders off angles and breaking setups.'],
['Brimstone','Controller','Reliable site execution','Simple, reliable smokes plus powerful area denial and Stim Beacon support.'],
['Chamber','Sentinel','Precision + escape','Hold aggressive angles with Rendezvous and punish mistakes with precision weapons.'],
['Clove','Controller','Fight while playing for team utility','Can affect rounds after death; rewards proactive fights and coordinated smoke timing.'],
['Cypher','Sentinel','Information + traps','Turn enemy movement into information and make flank routes dangerous.'],
['Deadlock','Sentinel','Area denial + protection','Barrier and GravNet tools can reshape fights and isolate pushes.'],
['Fade','Initiator','Hunt + fear','Use information and debuffs to make enemies easier to isolate and fight.'],
['Gekko','Initiator','Reusable creature utility','Wingman, Dizzy, Mosh and Thrash create flexible utility with reclaimable pieces.'],
['Harbor','Controller','Dynamic cover','Water walls create moving cover and let teams reshape sightlines during executes.'],
['Iso','Duelist','Take isolated fights','Shield and Kill Contract mechanics reward confidence in controlled duels.'],
['Jett','Duelist','Mobility + space','Dash and vertical movement enable aggressive first contact and quick escapes.'],
['KAY/O','Initiator','Suppress + flash','Suppress enemies so their abilities cannot help them, then capitalize on the timing.'],
['Killjoy','Sentinel','Lock down space','Turret, Alarmbot and Nanoswarm create layered zones that punish careless movement.'],
['Neon','Duelist','Speed + tempo','Explosive movement can break normal timing and create unusual entry paths.'],
['Omen','Controller','Uncertainty + repositioning','Flexible smokes, blind utility, and teleport mind-games create pressure.'],
['Phoenix','Duelist','Self-sufficient entry','Curveball and fire-based tools let Phoenix create fights and safely rehearse aggression.'],
['Raze','Duelist','Explosive space clearing','Paint Shells, Boom Bot and Blast Packs combine damage, movement, and site entry.'],
['Reyna','Duelist','Snowball duelist','Gets stronger from kills; best when the player can consistently convert first fights.'],
['Sage','Sentinel','Heal + stall','Barrier and slows can deny space while Healing Orb and Resurrection support the team.'],
['Sova','Initiator','Recon + damage','Recon Bolt and Owl Drone gather information; Shock Darts and Hunter’s Fury convert it.'],
['Tejo','Initiator','Targeted pressure','Ballistic utility forces opponents away from chosen locations and pressures defensive setups.'],
['Viper','Controller','Toxic territory control','Fuel-managed walls and clouds alter sightlines and punish teams that stay too long.'],
['Vyse','Sentinel','Trap + disarm fights','Utility can separate players from equipment and create awkward engagements.'],
['Waylay','Duelist','Burst movement + hinder','Speed and Refract mechanics let Waylay create fast fight windows and escape after contact.'],
['Yoru','Duelist','Deception + teleportation','Fakeout and Gatecrash create uncertainty; mastery is built around timing and information gaps.'],
['Veto','Sentinel','Utility denial','Veto can nullify parts of an opponent’s utility plan and force more direct gunplay.'],
['Miks','Controller','Team tempo + sonic support','Miks combines smokes, team buffs, healing/concuss tools, and a powerful sonic ultimate.'],
['Skye','Initiator','Team-guided information','Guiding Light, Trailblazer and Seekers make her a strong bridge between scouting and entry support.']
];
const weapons=[
['Classic','Sidearm','Free','Reliable default pistol; accurate first shots and strong right-click burst at close range.'],['Shorty','Sidearm','200','Very close-range burst; use from unexpected angles rather than fair long fights.'],['Frenzy','Sidearm','450','Fast full-auto sidearm for close pressure and run-and-gun situations.'],['Ghost','Sidearm','500','Silenced, accurate pistol with strong headshot potential and controllable recoil.'],['Sheriff','Sidearm','800','High-damage precision pistol; rewards confident headshots and careful peeks.'],['Bandit','Sidearm','600','Precision-focused pistol positioned between Ghost and Sheriff; a strong light-buy option.'],
['Stinger','SMG','1100','Fast close-range weapon whose recoil and spread make controlled distance important.'],['Spectre','SMG','1600','Versatile SMG for close-to-mid fights; easier to use than the Stinger.'],
['Bucky','Shotgun','850','Pump shotgun with heavy close-range burst; alt-fire extends utility at distance.'],['Judge','Shotgun','1850','Automatic shotgun with high close-range sustained damage.'],
['Bulldog','Rifle','2050','Burst/auto rifle that bridges cheaper buys and full rifles.'],['Guardian','Rifle','2250','Semi-automatic precision rifle with strong headshot reward.'],['Phantom','Rifle','2900','Fast, controllable rifle suited to close and medium engagements; silenced and magazine-friendly.'],['Vandal','Rifle','2900','High-confidence precision rifle famous for consistent headshot lethality across distance.'],
['Marshal','Sniper','950','Light sniper with strong pick potential and low commitment.'],['Outlaw','Sniper','2400','Two-shot sniper designed to pressure light shields and create awkward follow-up fights.'],['Operator','Sniper','4700','Extremely powerful one-shot sniper at most normal combat areas; expensive but round-defining.'],
['Ares','Heavy','1600','Large magazine and strong sustained fire; useful for suppression and wallbang-heavy ideas.'],['Odin','Heavy','3200','Huge magazine and sustained-fire pressure; strong for denial and wall penetration.']
];
const maps=[
['Abyss','Two-site','Death drops','Vertical risk, unusual edges, and long sightlines make positioning and utility timing important.'],
['Ascent','Two-site','Closing doors','Mid control is strategically important; switchable site doors can change rotations and retakes.'],
['Bind','Two-site','Teleporters','No traditional mid; teleporters create fast rotations and unusual attack routes.'],
['Breeze','Two-site','Open sightlines','Long angles, wide spaces, and mid structures strongly reward range control and disciplined utility.'],
['Corrode','Three-lane','Layered defenses','French castle-town setting converted into a radianite facility; a traditional three-lane structure.'],
['Fracture','Two-site','Four lanes + ziplines','Attacks can approach from unconventional directions, creating unusual pressure on defenders.'],
['Haven','Three-site','Three plant sites','Three sites spread defensive resources and create difficult rotation decisions.'],
['Icebox','Two-site','Vertical ropes','Tight verticality, ziplines, and layered elevations create unusual clearing problems.'],
['Lotus','Three-site','Rotating doors','Three sites plus large stone doors create multiple rotation and timing opportunities.'],
['Pearl','Two-site','Underwater city','No special moving mechanics; compact mid and long side lanes shape fights.'],
['Split','Two-site','Ropes + verticality','Strong mid importance and vertical lanes make movement and control critical.'],
['Sunset','Two-site','Traditional layout','Three-lane style map with mid pressure and familiar site-execution structure.'],
['Summit','Two-site','Droppable walls','Massive walls can drop and change the battlefield for the round.'],
['The Range','Practice','Training environment','Use aim, movement, weapon, and utility practice rather than treating it like a normal match.']
];
const knowledge=[
['Round structure','A standard round is a compact tactical problem: buy, establish information, take or deny space, execute or retake, then convert the numbers advantage. Side swap happens after 12 rounds in the standard 5v5 structure.','Think in phases instead of running around the map: buy → probe → commit → stabilize.'],
['Economy','Credits are a team resource, not five separate wallets. Full buys, half buys, eco rounds, force buys, and bonus ideas exist because future rounds matter.','Before buying, ask: What can the team afford? What do we need for this round? What happens to next round if we lose?'],
['Crosshair placement','Keep the crosshair where an enemy head is likely to appear before the enemy appears. This reduces the amount of mouse movement needed after contact.','Pre-aim common angles, match the height of the map geometry, and clear one threat at a time.'],
['Movement accuracy','Most weapons become inaccurate while you are moving. The core duel loop is often move → stop → shoot, not strafe randomly while spraying.','Practice counter-strafing concepts, deadzones, and clean stopping before worrying about advanced movement tricks.'],
['Peeking','A peek is a decision about what information and risk you are accepting. Wide swings, jiggles, shoulder peeks, jump peeks and contact peeks solve different problems.','Do not peek because you are bored. Peek to get information, take a fight you expect to win, or enable a teammate.'],
['Trading','A trade means recovering value after a teammate is eliminated. Good spacing lets the second player punish the enemy who just took the first fight.','Stay close enough to trade without standing in the same line of fire.'],
['Utility','Utility is time, space, information, denial, or fighting power. The best ability is the one that changes the opponent’s decision tree at the right moment.','Ask what the enemy must do after your utility lands. Then exploit that forced response.'],
['Smokes','A smoke removes or constrains a line of sight. It can block a defender, split a site, protect a plant, deny a retake path, or conceal a reposition.','A smoke is stronger when it cuts multiple enemy options rather than simply hiding one player.'],
['Flashes','Flashes are tempo tools. A flash can force an enemy to turn, surrender a position, or become vulnerable for a teammate.','Coordinate flashes with the player who will actually swing off them.'],
['Information','Information has value only when you act on it. Knowing one enemy is B does not automatically win the round; it tells your team how to redistribute attention.','Separate confirmed information from assumptions. Update your plan as new evidence appears.'],
['Defaulting','A default spreads players across the map to gather information, threaten multiple lanes, and avoid committing too early.','Defaults are not passive. The goal is to provoke a response and learn where the defenders are spending resources.'],
['Executing','An execute is a coordinated commitment into a site using utility, spacing, timing and clear roles.','Entry creates space, support clears danger, controllers shape sightlines, and the spike carrier follows the plan.'],
['Post-plant','After planting, the attacking team should use the new win condition to simplify the fight. Hold useful lines, preserve utility, and avoid taking unnecessary duels.','Ask where the spike is vulnerable to a defuse and which positions can deny that defuse safely.'],
['Retake','A retake is about timing, utility, and numbers. Defenders can wait for teammates instead of feeding one-by-one.','Retake together when possible. Clear the strongest danger first and use utility to make the site smaller.'],
['Clutching','Clutching is controlled uncertainty. The enemy has more information or numbers, so you need to create isolated fights and avoid giving everyone a simultaneous angle.','Reduce the number of enemies that can see you at once.'],
['Sound','Footsteps, gunfire, ability audio, reloads and environmental cues are information. Audio can tell you where someone is even when your crosshair cannot.','Know when walking is worth the lost speed and when a fast timing is more valuable.'],
['Trading space','Space is territory that changes what the enemy can safely do. Gaining space does not always mean getting a kill.','Take space behind utility, then make the enemy spend utility to retake it.'],
['Numbers advantage','A 5v4 is not permission to sprint into five different fights. It is a reason to reduce risk and make the opponent solve a harder problem.','Play more conservatively after creating an advantage unless the round requires acceleration.'],
['Anti-eco awareness','Cheap weapons can still punish careless players at their preferred range.','Respect short-range and trap-heavy positions when your team has the better buy.'],
['Mental reset','A bad round is data, not a requirement to revenge-peek.','After a mistake, name the actual error in one sentence and make the next decision from the current state.']
];
const quizzes=[
['What is the main purpose of a controller smoke?',['Remove or constrain a line of sight','Guarantee a kill','Give everyone armor','Reset the economy'],0],
['Why is crosshair placement important?',['It reduces required mouse movement after contact','It increases movement speed','It makes abilities recharge','It gives wallhack information'],0],
['What is a trade?',['Punishing an enemy shortly after they kill your teammate','Buying a new skin','Switching agents mid-round','Planting the Spike twice'],0],
['What should you consider before a big buy?',['This round and the next-round economy','Only your K/D','Your favorite weapon skin','The enemy team color'],0],
['What usually makes a good execute?',['Coordinated utility, timing, spacing and roles','Five players entering one by one','No information','Randomly throwing every ability'],0],
['What is a default mainly useful for?',['Gathering information and threatening multiple areas without committing too early','AFK time','Guaranteeing a site plant','Preventing teammates from moving'],0],
['Why can a numbers advantage change how you play?',['You can often reduce risk and force the opponent to make the harder move','It makes weapons stronger','It removes the round timer','It disables enemy abilities'],0],
['What does “one life per round” encourage?',['Valuing survival, information, trades and calculated risk','Constant solo rushing','Ignoring economy','Taking every duel'],0],
['What is a choke point?',['A constrained route where defenders can concentrate utility and fire','A shop menu','A type of pistol','A respawn zone'],0],
['What is the strongest reason to peek?',['To gain useful information or take a fight with a clear purpose','Because the round is boring','To show the enemy your skin','To waste utility'],0]
];
const roleOrder=['Duelist','Initiator','Controller','Sentinel'];
let activeRole='all';let quizIndex=0;let score=0;let answered=false;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function showPage(id){$$('.page').forEach(p=>p.classList.toggle('active',p.id===id));$$('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===id));history.replaceState(null,'','#'+id);window.scrollTo({top:0,behavior:'smooth'});}
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
window.addEventListener('hashchange',()=>showPage(location.hash.slice(1)||'home'));
function renderAgents(){const q=($('#agentSearch')?.value||'').toLowerCase();const list=agents.filter(a=>(activeRole==='all'||a[1]===activeRole)&&a.join(' ').toLowerCase().includes(q));$('#agentGrid').innerHTML=list.map(a=>`<article class="agent-card card"><div class="agent-top"><span class="agent-name">${a[0]}</span><span class="role">${a[1]}</span></div><div class="agent-role">${a[2]}</div><p class="agent-desc">${a[3]}</p><div class="agent-focus"><b>Study:</b> role purpose → timing → counters → combinations.</div></article>`).join('')||'<div class="card callout"><span>No agents match that search.</span></div>';}
$$('#roleFilters .filter').forEach(b=>b.addEventListener('click',()=>{activeRole=b.dataset.role;$$('#roleFilters .filter').forEach(x=>x.classList.toggle('active',x===b));renderAgents();}));
$('#agentSearch').addEventListener('input',renderAgents);
function renderWeapons(){const q=($('#weaponSearch')?.value||'').toLowerCase();$('#weaponGrid').innerHTML=weapons.filter(w=>w.join(' ').toLowerCase().includes(q)).map(w=>`<article class="weapon-card card"><h3>${w[0]}</h3><div class="weapon-meta">${w[1].toUpperCase()} · ${w[2]} CREDITS</div><p>${w[3]}</p><div class="tag-row"><span class="tag">Range matters</span><span class="tag">Learn recoil</span><span class="tag">Know the buy</span></div></article>`).join('');}
$('#weaponSearch').addEventListener('input',renderWeapons);
function renderMaps(){const q=($('#mapSearch')?.value||'').toLowerCase();$('#mapGrid').innerHTML=maps.filter(m=>m.join(' ').toLowerCase().includes(q)).map(m=>`<article class="map-card card"><div class="map-type">${m[1].toUpperCase()}</div><h3>${m[0]}</h3><p>${m[3]}</p><span class="mechanic"><b>Signature:</b> ${m[2]}</span></article>`).join('');}
$('#mapSearch').addEventListener('input',renderMaps);
function renderKnowledge(){ $('#knowledgeGrid').innerHTML=knowledge.map(k=>`<article class="knowledge card"><h3>${k[0]}</h3><p>${k[1]}</p><ul><li>${k[2]}</li></ul></article>`).join(''); }
function loadQuiz(){answered=false;const q=quizzes[quizIndex];$('#quizQuestion').textContent=q[0];$('#quizCount').textContent=`${quizIndex+1} / ${quizzes.length}`;$('#quizFeedback').textContent='';$('#quizFeedback').className='quiz-feedback';$('#quizOptions').innerHTML=q[1].map((o,i)=>`<button class="quiz-option" data-i="${i}">${o}</button>`).join('');$$('.quiz-option').forEach(b=>b.addEventListener('click',()=>answerQuiz(Number(b.dataset.i))));}
function answerQuiz(i){if(answered)return;answered=true;const q=quizzes[quizIndex];$$('.quiz-option').forEach((b,n)=>{if(n===q[2])b.classList.add('correct');if(n===i&&n!==q[2])b.classList.add('wrong');});if(i===q[2]){score++;$('#quizFeedback').textContent='Correct. Now explain it to yourself without looking.';$('#quizFeedback').classList.add('good')}else{$('#quizFeedback').textContent=`Not quite. The useful principle is: ${q[1][q[2]]}.`;$('#quizFeedback').classList.add('bad')}$('#score').textContent=`${score} correct`}
$('#nextQuiz').addEventListener('click',()=>{quizIndex=(quizIndex+1)%quizzes.length;loadQuiz()});
$('#menuBtn').addEventListener('click',()=>$('.nav').classList.toggle('open'));
renderAgents();renderWeapons();renderMaps();renderKnowledge();loadQuiz();showPage(location.hash.slice(1)||'home');
