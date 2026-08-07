# Krishan Bir Chaudhary — Website

Static multilingual marketing/biography site for Krishan Bir Chaudhary (President, Bharatiya Krishak Samaj). Built with Next.js (App Router) + React + Tailwind CSS v4. There is no backend, database, or API — content lives in `lib/` (`data.js`, `i18n*.js`) and the site supports English, Hindi, Bengali, and Marathi via a client-side `LanguageProvider`.

## Cursor Cloud specific instructions

- Package manager is **npm** (`package-lock.json`). Node 20+ is required (Next 16 / React 19); the VM's default Node satisfies this.
- Dev/build/run commands live in `package.json` scripts: `npm run dev` (dev server on port 3000), `npm run build` (static prerender of all routes; best "does it compile" check), `npm run start` (serve the build).
- There is **no test runner and no lint script configured** (no ESLint config committed, no Jest/Vitest/Playwright). `npm run build` is the closest thing to a verification/CI gate — it type-checks and statically generates all pages.
- Language switching is entirely client-side; if you edit translations in `lib/i18n*.js`, verify all four languages in the browser, not just English.
- `deploy-live.sh` / `deploy-live.bat` are Vercel production-deploy helpers only; they are not needed to run or test locally.
