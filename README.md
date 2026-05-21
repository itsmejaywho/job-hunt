# hackAssist UI

A React + Vite + Tailwind CSS project for the `hackAssist` landing experience.

## Requirements

- Node.js 18+ (recommended)
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
map/
├─ .vscode/
│  └─ settings.json
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  └─ logo.png
│  ├─ components/
│  │  ├─ layout/
│  │  │  └─ AppShell.jsx
│  │  ├─ ui/
│  │  ├─ Body.jsx
│  │  ├─ Footer.jsx
│  │  ├─ index.js
│  │  └─ Navbar.jsx
│  ├─ env/
│  │  └─ index.js
│  ├─ hooks/
│  │  └─ index.js
│  ├─ lib/
│  │  └─ index.js
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ index.js
│  │  └─ LandingPage.jsx
│  ├─ services/
│  │  └─ index.js
│  ├─ styles/
│  │  ├─ index.css
│  │  └─ Navbar.css
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## Notes

- Main route currently redirects to `/landingpage`.
- Navbar styles are in `src/styles/Navbar.css` and use Tailwind `@apply`.
