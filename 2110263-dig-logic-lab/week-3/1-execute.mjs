import { exec } from "node:child_process";

for (const c of "ABCDEFG") {
  exec(`espresso 01-input/${c}.pla > 01-output/${c}.pla`);
}
