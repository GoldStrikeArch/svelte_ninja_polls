<script>
  import { onMount } from "svelte";

  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  //stores imports
  import { pollStore } from "../../Stores/store";

  //import components
  import SinglePoll from "../SinglePoll/SinglePoll.svelte";

  onMount(() => {
    pollStore.update((currentPolls) => {
      return (currentPolls = localStorage.getItem("polls")
        ? JSON.parse(localStorage.getItem("polls"))
        : []);
    });
    // const polls = localStorage.getItem("polls")
    //   ? JSON.parse(localStorage.getItem("polls"))
    //   : [];
    // pollStore.set(polls);
  });
</script>

<div class="grid grid-cols-2 gap-4">
  {#each $pollStore as poll (poll.id)}
    <div class="w-1/2" in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <SinglePoll {...poll} />
    </div>
  {/each}
</div>
