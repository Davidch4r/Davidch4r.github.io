# David Pidugu — Portfolio

A static portfolio site built with plain TypeScript, HTML, and CSS (no framework). Content lives in `src/data.ts` so it's editable in one place.

## Structure

```
.
├── index.html              # page structure
├── styles/style.css        # all styling, theme tokens at the top
├── src/
│   ├── data.ts              # all resume content — edit this to update the site
│   ├── render.ts             # functions that turn data.ts into HTML
│   └── main.ts                # entry point, wires data to render functions
├── vite.config.ts            # build config — set `base` for GitHub Pages here
└── .github/workflows/deploy.yml  # auto-deploys to GitHub Pages on push to main
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Editing content

Almost everything you'd want to change lives in `src/data.ts`: contact links, publications, experience, projects, and skills. Edit the arrays there — `index.html` and `render.ts` shouldn't need to change for routine updates.

To change the education section (degree, coursework, GPA), edit the markup directly in `index.html` under `#education` — it wasn't worth abstracting into data.ts since it's a single entry.

## Deploying to GitHub Pages

**1. Set the base path** in `vite.config.ts`:
- Project page (`https://<username>.github.io/<repo-name>/`) → `base: "/<repo-name>/"`
- User page (`https://<username>.github.io/`, repo must be named `<username>.github.io`) → `base: "/"`

This repo currently assumes a project page named `portfolio`. Change it if your repo name differs.

**2. Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Davidch4r/<your-repo-name>.git
git push -u origin main
```

**3. Enable Pages:** In your repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.

That's it — the included workflow (`.github/workflows/deploy.yml`) will type-check, build, and deploy automatically on every push to `main`. Your site will be live at the URL shown in the Pages settings (and in the Actions tab after the first run).

### Manual deploy alternative

If you'd rather not use the Actions workflow, `gh-pages` is included as a fallback:

```bash
npm run deploy
```

This builds and pushes the `dist/` folder to a `gh-pages` branch directly. If you use this method, set **Settings → Pages → Source** to **Deploy from a branch** → `gh-pages` instead.

## Type-checking

```bash
npx tsc --noEmit
```

Strict mode is on (`tsconfig.json`) — this catches most mistakes (typos in property names, wrong types) before they hit the browser.
