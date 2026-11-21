# PHAUT Sovannvatanak — Portfolio

Personal portfolio for PHAUT Sovannvatanak, an Artificial Intelligence and English Literature student based in Phnom Penh, Cambodia.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Local SVG technology icons

## Run locally

Requirements:

- Node.js 22
- pnpm 10

```bash
pnpm install
pnpm dev
```

Open the local URL shown in the terminal.

## Production build

```bash
pnpm build
```

The deployable site is generated in `dist/`.

## Push to GitHub

Create an empty GitHub repository, then run these commands from the project folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your GitHub details. Do not commit `node_modules/` or `dist/`; both are already excluded by `.gitignore`.

## Deploy to Vercel

1. Sign in to Vercel.
2. Select **Add New → Project**.
3. Import the GitHub repository.
4. Vercel will detect the included Vite configuration.
5. Select **Deploy**.

The included `vercel.json` configures:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`

No environment variables are required.

## Main files

```text
src/App.tsx             Portfolio content and interactions
src/index.css           Global styles, themes, and responsive layouts
src/main.tsx            React entry point
public/tech-icons/      Local technology SVG icons
public/profile-photo.jpg Optional personal portrait
public/favicon.png      Browser icon
package.json            Dependencies and scripts
pnpm-lock.yaml          Reproducible dependency versions
vite.config.ts          Vite build configuration
vercel.json             Vercel deployment configuration
```

## Personal links

The project currently includes links to the portfolio owner's email, Telegram, GitHub, LinkedIn, CV, Power BI dashboard, Excel dashboard, and diabetes risk predictor. Update these URLs in `src/App.tsx` if they change.

## Add your portrait

Place your photo at:

```text
public/profile-photo.jpg
```

Use a vertical portrait if possible. A 4:5 image around `1200 × 1500` pixels works well. The portfolio shows a designed `PSV` fallback until the photo is added.
