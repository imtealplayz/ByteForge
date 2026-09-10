# VALORANT Wiki — ByteForge

ByteForge is an **unofficial VALORANT learning and reference wiki** built as a static Vercel-ready site.

## What changed in the visual upgrade

- Real VALORANT logo displayed in the header
- Live playable-agent data loaded from `valorant-api.com`
- Agent cards with current artwork / portraits
- Clickable Agent Showcase with:
  - Large portrait and background art
  - Role information
  - Four ability cards with ability icons
  - Ability descriptions
  - Ordered study checklist
  - Link to the official Riot agent page
- Live map data loaded from `valorant-api.com`
- Map cards with current artwork
- Clickable Map Showcase with:
  - Large map artwork
  - Ordered map facts
  - Signature-mechanic notes
  - Current callout names when available
  - A simplified tactical outline labelled **not to scale**
  - Link to Riot's official map information
- Search and role filters remain available
- Weapons, gameplay encyclopedia and active-recall practice room remain included
- Responsive layout for desktop and mobile

## Data / asset sources

The site uses the public VALORANT content API (`valorant-api.com`) for dynamic agent and map artwork, ability icons, descriptions and map callout metadata. Riot Games' official VALORANT pages remain the source of truth for live game changes and balance.

The VALORANT logo is sourced from a Riot-origin asset representation. Riot also publishes an official VALORANT Asset Kit containing logos and character art for creators.

## Current-state note

Riot currently lists **Season 26: Act V** as live. Patch notes and game data can change, so live values should always be checked against Riot's current pages.

## Run locally

No build step is required.

```text
Open index.html
```

Or serve the directory with any static HTTP server.

## Deploy to Vercel

Import `imtealplayz/ByteForge` into Vercel. The project uses plain HTML, CSS and JavaScript and requires no build command or environment variables.

## Project structure

```text
ByteForge/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Official sources

- VALORANT: https://playvalorant.com/en-us/
- Agents: https://playvalorant.com/en-us/agents/
- Maps: https://playvalorant.com/en-us/maps/
- Game Updates: https://playvalorant.com/en-us/news/game-updates/
- Riot Asset Kit: https://playvalorant.com/en-us/news/game-updates/valorant-asset-kit/
- Content API: https://valorant-api.com/

## Disclaimer

This is an unofficial educational fan project. VALORANT and Riot Games are trademarks of Riot Games, Inc. The project is not affiliated with or endorsed by Riot Games.
