#!/usr/bin/env bash
# Deploy latest KBC site (CRO + 4 languages) to Vercel production
set -euo pipefail
cd "$(dirname "$0")"
git pull origin main
git push kbc main || true
npx vercel --prod --yes --scope asitsarkar-5954s-projects
echo "Done → https://krishan-bir-chaudhary.vercel.app/"
