<svelte:head>
  <title>Admin</title>
  <meta name="admin" content="About this app" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  let selectedArtcc: string | null = 'select artcc';
  let showAddPIREPForm = false;

  const artccs: { id: string; name: string }[] = [
    { id: 'ab', name: 'ZAB - Albuquerque ARTCC' },
    { id: 'an', name: 'ZAN - Anchorage ARTCC' },
    { id: 'tl', name: 'ZTL - Atlanta ARTCC' },
    { id: 'bw', name: 'ZBW - Boston ARTCC' },
    { id: 'au', name: 'ZAU - Chicago ARTCC' },
    { id: 'ob', name: 'ZOB - Cleveland ARTCC' },
    { id: 'dv', name: 'ZDV - Denver ARTCC' },
    { id: 'fw', name: 'ZFW - Fort Worth ARTCC' },
    { id: 'cf', name: 'HCF - Honolulu CF' },
    { id: 'hu', name: 'ZHU - Houston ARTCC' },
    { id: 'id', name: 'ZID - Indianapolis ARTCC' },
    { id: 'jx', name: 'ZJX - Jacksonville ARTCC' },
    { id: 'kc', name: 'ZKC - Kansas City ARTCC' },
    { id: 'la', name: 'ZLA - Los Angeles ARTCC' },
    { id: 'me', name: 'ZME - Memphis ARTCC' },
    { id: 'ma', name: 'ZMA - Miami ARTCC' },
    { id: 'mp', name: 'ZMP - Minneapolis ARTCC' },
    { id: 'ny', name: 'ZNY - New York ARTCC' },
    { id: 'oa', name: 'ZOA - Oakland ARTCC' },
    { id: 'lc', name: 'ZLC - Salt Lake City ARTCC' },
    { id: 'se', name: 'ZSE - Seattle ARTCC' },
    { id: 'dc', name: 'ZDC - Washington D.C. ARTCC' }
    // Add more ARTCCs as needed
  ];

  function handleArtccChange(event: Event) {
    selectedArtcc = (event.target as HTMLSelectElement).value.toLowerCase();
    showAddPIREPForm = false;
  }

  onMount(() => {
    selectedArtcc = 'select artcc';
    showAddPIREPForm = false;
  });
</script>

<section>
  <h1>
    <div class="welcome">
      <strong>select your ARTCC</strong>
    </div>
  </h1>
  <div class="dropdown-container">
    <select bind:value={selectedArtcc} on:change={handleArtccChange}>
      <option disabled>select artcc</option>
      {#each artccs as { name } (name)}
        <option value={name.toLowerCase()}>{name}</option>
      {/each}
    </select>
  </div>

  {#if showAddPIREPForm && selectedArtcc}
    <div class="pirep-form-container">
      <h2>Add a PIREP for {selectedArtcc}</h2>
      <label for="pirep-type">PIREP Type:</label>
      <select id="pirep-type" name="pirep-type">
        <option value="ua">UA</option>
        <option value="uua">UUA</option>
      </select>

      <label for="location">Location:</label>
      <input type="text" id="location" name="location">

      <label for = "time">Time Phase:</label>
      <input type ="text" id ="time" name = "time">

      <label for = "altitude">Altitude:</label>
      <input type = "text" id = "altitude" name = "altitude">

      <label for = "turbulence">Turbulence:</label>
      <input type = "turblence" id = "turbulence" name = "turbulence">

      <!-- Add other PIREP fields here -->

      <button>Add PIREP for this ARTCC</button>
    </div>
  {/if}

  <button on:click={() => showAddPIREPForm = true}>Add PIREP</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    height: 100vh;
    text-align: center;
  }

  h1 {
    width: 100%;
    font-size: 25px;
    margin-bottom: 10px;
  }

  .welcome {
    margin-bottom: 20px;
  }

  .dropdown-container {
    margin-bottom: 20px;
    display: flex;
    margin-right: 0px; /* Adjust margin as needed */
    color: black;
    background-color: rgba(0, 0, 0, 0);
  }

  .pirep-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  label {
    margin-bottom: 5px;
  }

  input, select {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    border: 1px solid white; /* Adjust border as needed */
    background-color: transparent; /* Set background to transparent */
    color: white; /* Set text color */
    cursor: pointer; /* Add pointer cursor on hover */
    padding: 5px 10px; /* Add padding */
  }
</style>
