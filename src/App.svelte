<script>
  let count = 0;
  function handleClick() {
    count++;
  }

  let disabled = false;
</script>

<style>
  .disabled {
    background: gray;
  }
</style>

<main class="bg-red-700">
  <button
    class="font-bold py-2 px-4 rounded bg-blue-400"
    on:click={handleClick}>
    Click
  </button>
  <p>{count}</p>
</main>
