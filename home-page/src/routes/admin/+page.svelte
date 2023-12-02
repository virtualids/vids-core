<svelte:head>
  <title>Admin</title>
  <meta name="admin" content="About this app" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { ChevronDownSolid } from 'flowbite-svelte-icons';

  let selectedArtcc: string | null = 'Select ARTCC';
  let selectedFacility: string | null = 'Select Facility';
  let facilities: string[] = [];
  let addingFacility = false;

  const artccs: { name: string; facilities: string[] }[] = [
    { name: 'ZHU - Houston ARTCC', facilities: ['ZHU - Houston Center', 'I90', 'IAH'] },
    { name: 'ZJX - Jacksonville ARTCC', facilities: ['ZJX', 'F11', 'MCO'] },
    // Add more ARTCCs and facilities as needed
  ];

  function handleArtccChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedArtcc = select.value;
    facilities = artccs.find((artcc) => artcc.name === selectedArtcc)?.facilities || [];
    // Reset the selected facility when ARTCC changes
    selectedFacility = 'Select Facility';
  }

  function handleFacilityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedFacility = select.value;
  }

  function addFacility() {
    addingFacility = true;
  }

  function handleAddFacility() {
    // Add your logic to handle the addition of the facility
    console.log('Add facility logic here');
    // Reset the state
    addingFacility = false;
  }

  onMount(() => {
    // Set default values if needed
    selectedArtcc = artccs[0].name;
    facilities = artccs[0].facilities;
  });
</script>

<section class="container">
  <h1>
    <div class="welcome">
      <strong>Add/Edit Facilities</strong>
    </div>
  </h1>

  <div class="dropdown-container">
    <select bind:value={selectedArtcc} on:change={handleArtccChange}>
      <option disabled>Select ARTCC</option>
      {#each artccs as { name } (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </div>

  {#if selectedArtcc !== 'Select ARTCC'}
    <div class="dropdown-container">
      <select bind:value={selectedFacility} on:change={handleFacilityChange}>
        <option disabled>Select Facility</option>
        {#each facilities as facility (facility)}
          <option value={facility}>{facility}</option>
        {/each}
      </select>
    </div>
  {/if}
</section>

<section>
  {#if addingFacility}
    <div class="facility-container">
      <label for="id">ID:</label>
      <input class="color" type="text" id="id" />

      <label for="name">Name:</label>
      <input class="color" type="text" id="name" />

      <label for="type">Type:</label>
      <input class="color" type="text" id="type" />

      <button on:click={handleAddFacility}>Add</button>
    </div>
  {:else}
    <button on:click={addFacility}>Add Facility</button>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    height: 100vh;
  }

  h1 {
    width: 100%;
    font-size: 25px;
    margin-bottom: 10px;
  }

  .container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .welcome {
    margin-bottom: 20px;
  }

  .dropdown-container {
    margin-bottom: 20px;
    display: flex;
    margin-right: 20px; /* Adjust margin as needed */
    color: black;
    background-color: aqua;
  }

  .facility-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .color {
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 10px;
  }
</style>
