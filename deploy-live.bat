@echo off
REM Deploy latest KBC site (CRO + 4 languages) to Vercel production
cd /d "%~dp0"
git pull origin main
git push kbc main
call npx vercel --prod --yes --scope asitsarkar-5954s-projects
echo.
echo Done. Open https://krishan-bir-chaudhary.vercel.app/
pause
