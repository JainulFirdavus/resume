# Digital Profile

An interactive, game-style resume for **Mohamed Jainul Firdavus**, Full Stack Developer (Node.js · NestJS · React · PostgreSQL · AWS).

## What's inside

- **Power level (out of 1000):** calculated live from career data. Each skill earns years from the jobs where it was used, and those feed six attribute scores plus total experience.
- **Character sheet:** a radar chart and attribute bars, each showing the skill-years behind it.
- **Skill inventory:** every technology, levelled by years of hands-on use, with filters by category.
- **Career levels:** education, then Casperon → Innovations App → Photon → TCS, each with projects and its biggest win.
- **Arcade:** three mini games, each adding up to +50 bonus power.
  - Skill Catcher: catch falling skills and dodge bugs.
  - Bug Smash: fix production bugs before they escape.
  - Stack Match: pair each technology with the project where it was used.
- **Achievements and strength report:** a final rank with the full score breakdown.

## Build

No dependencies. Needs Node 18+.

```bash
npm run build     # copies the site into dist/
npm start         # serves dist/ locally
```

## Deploy on Render

**Option A, Blueprint:** in Render choose **New → Blueprint**, then pick this repo. `render.yaml` sets everything up.

**Option B, Static Site:** in Render choose **New → Static Site**, pick this repo, and set:

| Setting | Value |
|---|---|
| Branch | `main` |
| Build Command | `npm run build` |
| Publish Directory | `dist` |

Every push to `main` redeploys automatically.

Arcade progress is saved in the visitor's own browser (localStorage).
