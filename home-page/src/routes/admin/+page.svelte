<svelte:head>
  <title>Admin</title>
  <meta name="admin" content="About this app" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  let selectedArtcc: string | null = 'Select ARTCC';
  let selectedFacility: string | null = 'Select Facility';
  let facilities: string[] = [];
  let addingFacility = false;
  let facilityType: string = 'enroute';

  const artccs: { id: string; name: string; facilities: string[] }[] = [
    { id: 'ab', name: 'ZAB - Albuquerque ARTCC', facilities: [] },
    { id: 'an', name: 'ZAN - Anchorage ARTCC', facilities: [] },
    { id: 'tl', name: 'ZTL - Atlanta ARTCC', facilities: [] },
    { id: 'bw', name: 'ZBW - Boston ARTCC', facilities: [] },
    { id: 'au', name: 'ZAU - Chicago ARTCC', facilities: [] },
    { id: 'ob', name: 'ZOB - Cleveland ARTCC', facilities: [] },
    { id: 'dv', name: 'ZDV - Denver ARTCC', facilities: [] },
    { id: 'fw', name: 'ZFW - Fort Worth ARTCC', facilities: [] },
    { id: 'cf', name: 'HCF - Honolulu CF', facilities: [] },
    { id: 'hu', name: 'ZHU - Houston ARTCC', facilities: [] },
    { id: 'id', name: 'ZID - Indianapolis ARTCC', facilities: [] },
    { id: 'jx', name: 'ZJX - Jacksonville ARTCC', facilities: [] },
    { id: 'kc', name: 'ZKC - Kansas City ARTCC', facilities: [] },
    { id: 'la', name: 'ZLA - Los Angeles ARTCC', facilities: [] },
    { id: 'me', name: 'ZME - Memphis ARTCC', facilities: [] },
    { id: 'ma', name: 'ZMA - Miami ARTCC', facilities: [] },
    { id: 'mp', name: 'ZMP - Minneapolis ARTCC', facilities: [] },
    { id: 'ny', name: 'ZNY - New York ARTCC', facilities: [] },
    { id: 'oa', name: 'ZOA - Oakland ARTCC', facilities: [] },
    { id: 'lc', name: 'ZLC - Salt Lake City ARTCC', facilities: [] },
    { id: 'se', name: 'ZSE - Seattle ARTCC', facilities: [] },
    { id: 'dc', name: 'ZDC - Washington D.C. ARTCC', facilities: [] }
    // Add more ARTCCs and facilities as needed
  ];

  function handleArtccChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedArtcc = select.value;
    facilities = artccs.find((artcc) => artcc.name === selectedArtcc)?.facilities || [];
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
    selectedArtcc = 'Select ARTCC'; // Change the default value to 'Select ARTCC'
    facilities = artccs[0].facilities;
  });
</script> 

<section class="container">
  <h1>
    <div class="welcome">
      <strong>add/edit facilities</strong>
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
    <label for="id">{selectedFacility ? 'ID' : 'Enter Facility ID'}:</label>
    <input class="color" type="text" id="id" />

    <label for="name">{selectedFacility ? 'Name' : 'Enter Facility Name'}:</label>
    <input class="color" type="text" id="name" />

    <label for="type">{facilityType !== 'enroute' ? 'Type' : 'Select Facility Type'}:</label>
    <select bind:value={facilityType}>
      <option value="enroute">Enroute</option>
      <option value="tracon">Tracon</option>
      <option value="tower">Tower</option>
    </select>

    <button class="{addingFacility ? 'bordered' : ''}" on:click={handleAddFacility}>add</button>
  </div>
{:else}
  <button class="{addingFacility ? 'bordered' : ''}" on:click={addFacility}>add facility</button>
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
    text-align: center;
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

.bordered {
  border: 2px solid black;
}
</style>
