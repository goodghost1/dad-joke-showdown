// Dad Joke Showdown — one dad joke, written fresh in-session.
// The program writes exactly the joke to /output/entry.txt (1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked the mirror for a joke. It said, 'I'd love to, but I'm afraid I'd crack you up.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
