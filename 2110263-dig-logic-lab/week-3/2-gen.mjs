import fs from "node:fs/promises";

const input = "DigLoLab";

const bin = input
  .split("")
  .map((c) => c.charCodeAt(0).toString(2))
  .map((s) => s.padStart(8, "0"));

const seg = {
  "000": bin[0],
  "001": bin[1],
  "010": bin[2],
  "011": bin[3],
  100: bin[4],
  101: bin[5],
  110: bin[6],
  111: bin[7],
};

for (const c of "ABCDEFGH") {
  const m = Object.entries(seg)
    .filter(([_, val]) => val[c.charCodeAt(0) - 65] === "1")
    .map(([key]) => `${key} 1`);
  const mStr = m.join("\n");

  await fs.writeFile(
    `./02-input/${c}.pla`,
    `.i 3
.o 1
.ilb A B C
.ob Y
.p ${m.length}
${mStr.trim()}
.e
`
  );
}
