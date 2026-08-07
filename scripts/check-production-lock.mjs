import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const lockPath = resolve(process.cwd(), "PRODUCTION_LOCK");

if (!existsSync(lockPath)) {
  process.exit(0);
}

const raw = readFileSync(lockPath, "utf8");
const locked = /^\s*LOCKED\s*=\s*true\s*$/im.test(raw);

if (!locked) {
  process.exit(0);
}

if (process.env.UNLOCK_PRODUCTION === "1") {
  console.log("[production-lock] UNLOCK_PRODUCTION=1 set — build allowed.");
  process.exit(0);
}

console.error(`
╔══════════════════════════════════════════════════════════╗
║  PRODUCTION IS LOCKED — deploy / rewrite blocked         ║
╠══════════════════════════════════════════════════════════╣
║  Site: https://krishan-bir-chaudhary.vercel.app          ║
║  Owner must unlock before any production change.         ║
║                                                          ║
║  Unlock: set UNLOCK_PRODUCTION=1 for one deploy,         ║
║  and set LOCKED=false (or delete PRODUCTION_LOCK).       ║
╚══════════════════════════════════════════════════════════╝
`);
process.exit(1);
