import fs from "node:fs/promises";

const D = `
1010 -
1011 -
1100 -
1101 -
1110 -
1111 -
`;

const seg = {
  "0000": "ABCDEF",
  "0001": "BC",
  "0010": "ABDEG",
  "0011": "ABCDG",
  "0100": "BCFG",
  "0101": "ACDFG",
  "0110": "ACDEFG",
  "0111": "ABC",
  1000: "ABCDEFG",
  1001: "ABCDFG",
};

for (const c of "ABCDEFG") {
  const m = Object.entries(seg)
    .filter(([_, val]) => val.includes(c))
    .map(([key]) => `${key} 1`);
  const mStr = m.join("\n");

  await fs.writeFile(
    `./01-input/${c}.pla`,
    `.i 4
.o 1
.ilb A B C D
.ob Y
.p ${m.length + 6}
${mStr.trim()}
${D.trim()}
.e
`
  );
}
