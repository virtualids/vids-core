<svelte:head>
  <title>Admin</title>
  <meta name="admin" content="About this app" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  let selectedArtcc: string | null = 'Select ARTCC';
  let selectedFacility: string | null = 'Select Facility';
  let facilities: string[] = [];

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
    { id: 'kc', name: 'ZKC - Kansas City ARTCC', facilities: ["Kansas City Center (ZKC)", "Kansas City Approach (KC)"] },
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
    // Reset the selected facility when ARTCC changes
    selectedFacility = 'Select Facility';
  }

	function handleFacilityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedFacility = select.value;
  }

  onMount(() => {
    // Set default values if needed
    selectedArtcc = artccs[0].name;
    facilities = artccs[0].facilities;
  });
</script>

<h1>
	<div class="welcome">
		<strong>add/edit facilities</strong>
	</div>
</h1>

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
  }

  .container {
    text-align: center;
		display: flex;
		flex-direction: row;
		border-radius: 5px;
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
</style>

