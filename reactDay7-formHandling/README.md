# reactDay7-formHandling

Mini React app built on Vite to practice form handling with controlled inputs.

## What the demo shows
- Controlled input tied to React state via `value={inputVal}` and `onChange`.
- Clean `submitHandler` that prevents the default page refresh, logs the name, and then clears the field.
- Why `onSubmit` on the `<form>` is preferred over `onClick` on the button for real form submission logic.
- Tailwind CSS (v4) pulled in through `@import "tailwindcss"` plus a simple dark background in `index.css`.

## Key files
- `src/App.jsx` – main form component using `useState` and a reusable submit handler.
- `src/index.css` – imports Tailwind and sets the page background.
- `src/main.jsx` – React entry point that renders `App` with `StrictMode`.
- `package.json` – scripts for dev (`vite`), build, preview, and lint.

## Run it locally
1) Install deps: `npm install`
2) Start dev server: `npm run dev` (Vite defaults to http://localhost:5173)
3) Open DevTools console to see the submitted name logged.

## Quick workflow
- Type a name in the input (kept in sync with state).
- Hit **Submit**; the form handler logs the value and resets the input without a page reload.
