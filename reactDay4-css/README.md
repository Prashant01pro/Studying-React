# React Day 4 — CSS & Event Handling

A small Vite + React 19 sandbox that focuses on two things:
- Getting Tailwind CSS v4 working in a fresh Vite project.
- Practicing core DOM event handling (click, wheel, mouse move) in React.

## What’s built
- Full‑page layout with three vertical sections (`.page1`, `.page2`, `.page3`) sized to the viewport for easy scrolling tests. Styles live in `src/index.css`.
- Tailwind CSS import (`@import "tailwindcss";`) plus a few utility classes directly on elements (e.g., `bg-blue-400`, `rounded-xs`, `m-4`) to contrast framework utilities with custom CSS.
- Interactive UI in `src/App.jsx`:
  - `onClick` handler logs “Button was Clicked”.
  - `onWheel` captures `deltaY` to report scroll speed/direction and branches into positive/negative scroll messages.
  - `onMouseMove` on the magenta `.box` to inspect pointer event payloads in the console.
- Inline styles on the button to show coexistence of inline CSS with Tailwind/custom styles.

## File map (quick reference)
- `src/main.jsx` — React entry with `StrictMode`.
- `src/App.jsx` — Demo UI and event handlers.
- `src/index.css` — Tailwind import, page sizing, background colors, custom box style.
- `src/App.css` — Vite starter styles (not currently imported but kept for reference).
- `index.html` — Vite root with `#root` mount.

## Run it locally
1) Install deps: `npm install`
2) Start dev server: `npm run dev`
3) Open the shown localhost URL and use the browser console to see log output while:
   - Clicking the button,
   - Scrolling anywhere on the page,
   - Moving the mouse over the purple box.

