# React Project Setup — Restructure & Tailwind Integration

## Context
Project path: `C:\Users\SPM\Desktop\map\src`
Framework: React (Vite or CRA)
Goal: Reorganize the existing `src` folder without deleting source files, set up a clean scalable folder structure, and install + configure Tailwind CSS v3.

---

## Step 1 — Reorganize the `src` folder

Keep all existing source files. Reorganize them into the following structure:
    src/
    ├── env/                  # API keys and environment variable helpers
    │   └── index.js          # Exports all env vars (reads from .env)
    ├── hooks/                # Custom React hooks
    │   └── index.js          # Re-exports all hooks from this folder
    ├── styles/               # Global and component CSS files
    │   └── index.css         # Main stylesheet (Tailwind directives go here)
    ├── components/           # (keep/move existing components here)
    ├── pages/                # (keep/move existing pages here)
    └── App.jsx               # Main app entry

Rules:
- Do NOT delete any existing `.jsx` or `.js` files — move them to the appropriate folder.
- If a file's category is unclear, place it in `components/` by default.
- Update all import paths after moving files.


## Step 2 — Set up the `env/` folder

Create `src/env/index.js` to centralize all environment variable access:

```js
// src/env/index.js
export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_BASE_URL;
// Add more as needed
```

Create a `.env` file at the project root (not inside `src`):

```env
VITE_API_KEY=your_api_key_here
VITE_BASE_URL=https://your-api-url.com
```

Make sure `.env` is listed in `.gitignore`.

---

## Step 3 — Install and configure Tailwind CSS v3

Run the following in the project root:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js` to scan all React files:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the Tailwind directives to the single global stylesheet at `src/styles/index.css`:

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import it once in `src/main.jsx` (or `src/index.js`) so it's available everywhere:

```js
// src/main.jsx
import './styles/index.css';
```

---

## Constraints & Notes
- Tailwind version: v3 (do NOT install v4)
- One global CSS entry point — do not add Tailwind directives to other files
- All env vars must be prefixed with `VITE_` (required by Vite) or `REACT_APP_` if using CRA
- Do not hardcode API keys anywhere in the source code
- After restructuring, verify the dev server still runs with `npm run dev`

## Step 4 - Landing page

Create a `/landingpage` route using React Router. Build a `LandingPage.jsx` 
inside `pages/` as a column flex container (`flex flex-col min-h-screen`) with 
no content inside — only composing three components: `Navbar.jsx`, `Body.jsx`, 
and `Footer.jsx`, all placed inside `components/`. Navbar is `bg-red-500`, Body 
is `bg-blue-500` with `flex-1` to fill remaining space, Footer is 
`bg-orange-500`. Each component is empty with no content. Style with Tailwind 
only — no inline styles. Add a global reset (`margin: 0; padding: 0; 
box-sizing: border-box`) before the Tailwind directives in `styles/index.css`. 
Register the route in `App.jsx` and install `react-router-dom` if not present.