import path from "path";
import minimist from "minimist";
import { fileURLToPath } from "url";
import { Plop, run } from "plop";

// == Types ================================================================

// == Constants ============================================================

const args = process.argv.slice(2);
const argv = minimist(args);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// == Exports ==============================================================

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.resolve(__dirname, "plopfile.ts"),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => {
    return run(env, undefined, true);
  }
);
