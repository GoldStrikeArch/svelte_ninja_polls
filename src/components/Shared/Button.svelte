<script>
  export let type = "primary";
  export let disabled = false;
</script>

<button
  class="font-semibold py-2 px-4 border border-blue-500 rounded mt-4"
  class:btn-primary={type === 'primary'}
  class:btn-secondary={type === 'secondary'}
  class:btn-disabled={disabled}
  {disabled}
  on:click>
  <slot>Default Button</slot>
</button>
