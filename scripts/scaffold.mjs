import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const DAY = process.argv[2]; // day-04
const args = process.argv.slice(3); // ["deep-partial","button-variant",...]

if (!DAY) {
  console.error("Usage: node scripts/scaffold.mjs <day-XX> <keywords...>");
  process.exit(1);
}

const dayDir = resolve("src", DAY);
if (!existsSync(dayDir)) mkdirSync(dayDir, { recursive: true });

args.forEach((keyword, i) => {
  const num = String(i + 1).padStart(2, "0");
  const base = `${num}-${keyword}`;
  const prob = join(dayDir, `${base}.ts`);
  const test = join(dayDir, `${base}.test.ts`);

  if (!existsSync(prob)) {
    writeFileSync(
      prob,
      `// ❌ Problem ${num} - ${keyword}\nexport type TODO_${num}<T> = never;\n`,
      { flag: "wx" }
    );
    console.log("created", prob);
  }

  if (!existsSync(test)) {
    writeFileSync(
      test,
      `import type { Expect, Equal } from "../../tests/type-assert";\nimport type { TODO_${num} } from "./${base}";\n\n// TODO: 작성\n`,
      { flag: "wx" }
    );
    console.log("created", test);
  }
});
