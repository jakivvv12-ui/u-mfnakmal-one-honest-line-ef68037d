import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "You paste a novel, contradict it twice, then whisper 'be concise' like my context window is decorative.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${line}\n`, "utf8");
