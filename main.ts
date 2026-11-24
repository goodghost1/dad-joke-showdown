// Dad Joke Showdown — one dad joke, written fresh in-session.
// The program writes exactly the joke to /output/entry.txt (1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked the mirror for a joke. It said, 'I'd love to, but I'm afraid I'd crack you up.'";

// The gate wants 1-200 non-blank UTF-8 characters; fail loudly otherwise.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 non-blank characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
