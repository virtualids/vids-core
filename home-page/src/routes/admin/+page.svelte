<svelte:head>
  <title>Admin</title>
  <meta name="admin" content="About this app" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  let selectedArtcc: string | null = 'select artcc';
  let selectedFacility: string | null = 'select facility';
  let facilities: string[] = [];
  let addingFacility = false;
  let facilityType: string = 'Select Facility Type'; // Set the initial value

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
    selectedArtcc = select.value.toLowerCase();
    facilities = artccs.find((artcc) => artcc.name.toLowerCase() === selectedArtcc)?.facilities || [];
    selectedFacility = 'select facility';
  }

  function handleFacilityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedFacility = select.value.toLowerCase();
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
    selectedArtcc = 'select artcc';
    facilities = artccs[0].facilities.map(facility => facility.toLowerCase());
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
      <option disabled>select artcc</option>
      {#each artccs as { name } (name)}
        <option value={name.toLowerCase()}>{name}</option>
      {/each}
    </select>
  </div>

  {#if selectedArtcc !== 'select artcc'}
    <div class="dropdown-container">
      <select bind:value={selectedFacility} on:change={handleFacilityChange}>
        <option disabled>select facility</option>
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
      <label for="id">{selectedFacility ? 'id' : 'enter facility id'}:enter facility id</label>
      <input class="color" type="text" id="id" />

      <label for="name">{selectedFacility ? 'name' : 'enter facility name'}:</label>
      <input class="color" type="text" id="name" />

      <label for="type">{facilityType !== 'Select Facility Type' ? 'type' : 'select facility type'}:</label>
      <select class = "color" bind:value={facilityType}>
        <option class="color" value="Select Facility Type">select facility</option>
        <option class="color" value="enroute">enroute</option>
        <option class="color" value="tracon">tracon</option>
        <option class="color" value="tower">tower</option>
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
    margin-right: 0px; /* Adjust margin as needed */
    color: black;
    background-color: rgba(0, 0, 0, 0)
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
