<script>
  //componentes imports
  import Header from "./components/Header/Header.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import Tabs from "./components/Shared/Tabs.svelte";
  import PollList from "./components/PollList/PollList.svelte";
  import CreateNewPollForm from "./components/CreateNewPollForm/CreateNewPollForm.svelte";

  let items = ["Current Polls", "Create New Poll Form"];
  let activeItem = "Current Polls";
</script>

<Header />
<div class="container mx-auto px-4">
  <main>
    <Tabs {items} bind:activeItem />
    {#if activeItem === 'Current Polls'}
      <PollList />
    {:else if activeItem === 'Create New Poll Form'}
      <CreateNewPollForm bind:activeItem />
    {/if}
  </main>
  <Footer />
</div>
