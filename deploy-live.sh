#!/usr/bin/env bash
# Deploy KarmYog Vatika (KY21C × BKS) to Vercel production
set -euo pipefail
cd "$(dirname "$0")"
git pull origin main
npx vercel --prod --yes --scope asitsarkar-5954s-projects
echo "Done → https://krishan-bir-chaudhary.vercel.app/"
