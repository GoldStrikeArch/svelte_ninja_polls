<script>
  import { tweened } from "svelte/motion";
  import { scale } from "svelte/transition";

  //stores imports
  import { pollStore } from "../../Stores/store";

  //import components
  import Card from "../Shared/Card.svelte";
  import Button from "../Shared/Button.svelte";

  export let id;
  export let question = "";
  export let answerA = "";
  export let answerB = "";
  export let voteA = 0;
  export let voteB = 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: totalVotes = voteA + voteB;

  $: percentA = Math.floor((100 / totalVotes) * voteA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * voteB) || 0;

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  function handleDelete(id) {
    pollStore.update((currentPolls) => {
      currentPolls = currentPolls.filter((poll) => poll.id !== id);

      localStorage.setItem("polls", JSON.stringify(currentPolls));

      return currentPolls;
    });
  }

  function updateVote(id, vote) {
    pollStore.update((currentPolls) => {
      const updatedPoll = currentPolls.find((poll) => poll.id === id);
      updatedPoll[vote]++;

      currentPolls = currentPolls.map((poll) => {
        return poll.id === id ? updatedPoll : poll;
      });

      localStorage.setItem("polls", JSON.stringify(currentPolls));
      return currentPolls;
    });
  }
</script>

<Card>
  <div>
    <h3 class="text-xl my-2">{question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div
      class="my-2 bg-gray-100 cursor-pointer relative"
      on:click={updateVote(id, 'voteA')}>
      <div
        class="absolute border-red-700 border-l-2 bg-red-400 h-full opacity-50"
        style="width: {$tweenedA}%" />
      <span>{answerA} ({voteA})</span>
    </div>
    <div
      class="my-2 bg-gray-100 cursor-pointer relative"
      on:click={updateVote(id, 'voteB')}>
      <div
        class="absolute border-green-700 border-l-2 bg-green-400 h-full
        opacity-50"
        style="width: {$tweenedB}%" />
      <span>{answerB} ({voteB})</span>
    </div>
    <Button on:click={handleDelete(id)}>Delete Poll</Button>
  </div>
</Card>
