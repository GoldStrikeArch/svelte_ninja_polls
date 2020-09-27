import { writable } from "svelte/store";

export const pollStore = writable([
  {
    id: 1,
    question: "Svelte vs React",
    answerA: "Svelte",
    answerB: "React",
    voteA: 14,
    voteB: 9,
  },
  {
    id: 2,
    question: "Elixir is the best",
    answerA: "Yeah",
    answerB: "Nah",
    voteA: 15,
    voteB: 15,
  },
]);
