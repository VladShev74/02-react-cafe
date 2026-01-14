type VoteType = "good" | "neutral" | "bad";

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export type { VoteType, Votes };
