# Agent instructions

## Production lock

If `PRODUCTION_LOCK` exists and contains `LOCKED=true`, **production is frozen**.

- Do **not** rewrite site content or design.
- Do **not** deploy to Vercel production (`vercel --prod` / promote).
- Do **not** reconnect Git integration for the Vercel project.
- Only the site owner can unlock (see `PRODUCTION_LOCK` and `.cursor/rules/production-lock.mdc`).

Live site: https://krishan-bir-chaudhary.vercel.app  
Pinned deployment: `dpl_DLLGsjoPQXeifHTMCPYesSy7YnqR`
