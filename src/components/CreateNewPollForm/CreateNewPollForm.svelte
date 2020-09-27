<script>
  //stores imports
  import { pollStore } from "../../Stores/store";

  //import componentes
  import Button from "../Shared/Button.svelte";

  export let activeItem = "Create New Poll Form";

  let question = "";
  let answerA = "";
  let answerB = "";

  $: isValidForm =
    isValidQuestion(question) &&
    isValidAnswer(answerA) &&
    isValidAnswer(answerB);

  $: console.log(isValidForm);

  function isValidQuestion(question) {
    return question.length > 5;
  }

  function isValidAnswer(answer) {
    return answer.length > 0;
  }

  function handleSubmit() {
    const poll = {
      id: Math.random() * Date.now(),
      question,
      answerA,
      answerB,
      voteA: 0,
      voteB: 0,
    };
    pollStore.update((currentPolls) => {
      currentPolls = [poll, ...currentPolls];
      localStorage.setItem("polls", JSON.stringify(currentPolls));
      return currentPolls;
    });

    activeItem = "Current Polls";
  }
</script>

<form class="w-full max-w-sm" on:submit|preventDefault={handleSubmit}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="question">
        Question
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="input" id="question" type="text" bind:value={question} />
      {#if !isValidQuestion(question)}
        <p class="text-red-700">Question should be greater than 5</p>
      {/if}
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="answerA">
        Answer A
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="input" id="answerA" type="text" bind:value={answerA} />
      {#if !isValidAnswer(answerA)}
        <p class="text-red-700">Answer cannot be empty</p>
      {/if}
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="answerB">
        Answer A
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="input" id="answerB" type="text" bind:value={answerB} />
      {#if !isValidAnswer(answerB)}
        <p class="text-red-700">Answer cannot be empty</p>
      {/if}
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3" />
    <div class="md:w-2/3">
      <Button disabled={!isValidForm} type={'secondary'}>Add New Poll</Button>
    </div>
  </div>
</form>
