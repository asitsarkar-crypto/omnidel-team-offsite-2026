# Agent instructions

## Production lock

If `PRODUCTION_LOCK` exists and contains `LOCKED=true`, **production is frozen**.

- Do **not** rewrite site content or design.
- Do **not** deploy to Vercel production (`vercel --prod` / promote / `--build-env UNLOCK_PRODUCTION=1`).
- Do **not** reconnect Git integration or reset the Vercel `buildCommand` lock.
- Only the site owner can unlock (see `PRODUCTION_LOCK` and `.cursor/rules/production-lock.mdc`).

Live site: https://krishan-bir-chaudhary.vercel.app  
Pinned deployment: `dpl_DLLGsjoPQXeifHTMCPYesSy7YnqR`
