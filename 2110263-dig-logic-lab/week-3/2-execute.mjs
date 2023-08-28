import { exec } from "node:child_process";

for (const c of "ABCDEFGH") {
  exec(`espresso 02-input/${c}.pla > 02-output/${c}.pla`);
}
