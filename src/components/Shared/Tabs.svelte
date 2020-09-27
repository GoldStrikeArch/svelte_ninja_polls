<script>
  export let items = [];
  export let activeItem = items[0];

  function handleClick(item) {
    activeItem = item;
  }
</script>

<div class="flex justify-center items-center">
  {#each items as item}
    <div
      class="mx-6 my-2 cursor-pointer hover:text-blue-500"
      class:active-tab={activeItem === item}
      on:click={handleClick(item)}>
      {item}
    </div>
  {/each}
</div>
