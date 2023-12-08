<svelte:head>
  <title>Select ARTCC</title>
</svelte:head>

<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { writable } from "svelte/store";

  let selectedArtcc: string | null = "select artcc";
  let pirepData: Record<string, any> = {};
  const artccs: { id: string; name: string }[] = [
    { id: "ab", name: "ZAB - Albuquerque ARTCC" },
    { id: "an", name: "ZAN - Anchorage ARTCC" },
    { id: "tl", name: "ZTL - Atlanta ARTCC" },
    { id: "bw", name: "ZBW - Boston ARTCC" },
    { id: "au", name: "ZAU - Chicago ARTCC" },
    { id: "ob", name: "ZOB - Cleveland ARTCC" },
    { id: "dv", name: "ZDV - Denver ARTCC" },
    { id: "fw", name: "ZFW - Fort Worth ARTCC" },
    { id: "cf", name: "HCF - Honolulu CF" },
    { id: "hu", name: "ZHU - Houston ARTCC" },
    { id: "id", name: "ZID - Indianapolis ARTCC" },
    { id: "jx", name: "ZJX - Jacksonville ARTCC" },
    { id: "kc", name: "ZKC - Kansas City ARTCC" },
    { id: "la", name: "ZLA - Los Angeles ARTCC" },
    { id: "me", name: "ZME - Memphis ARTCC" },
    { id: "ma", name: "ZMA - Miami ARTCC" },
    { id: "mp", name: "ZMP - Minneapolis ARTCC" },
    { id: "ny", name: "ZNY - New York ARTCC" },
    { id: "oa", name: "ZOA - Oakland ARTCC" },
    { id: "lc", name: "ZLC - Salt Lake City ARTCC" },
    { id: "se", name: "ZSE - Seattle ARTCC" },
    { id: "dc", name: "ZDC - Washington D.C. ARTCC" },
  ];

  // Store to hold the selected ARTCC data
  const selectedData = writable<[string, any][] | null>(null);

  function handleArtccChange(event: Event) {
    const select = event.currentTarget as HTMLSelectElement;
    selectedArtcc = (select.value || "") as string;

    // Fetch data for the selected ARTCC from pirep.json
    fetch(`pirep.json`)
      .then((response) => response.json())
      .then((data: Record<string, any>) => {
        if (selectedArtcc) {
          pirepData = data[selectedArtcc]?.report_callsign || {};
        } else {
          pirepData = {};
        }
        const artccPireps = Object.entries(pirepData);

        // Check if there are any pireps for the selected ARTCC
        if (artccPireps.length > 0) {
          selectedData.set(artccPireps);
        } else {
          selectedData.set([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data | ", error);
        selectedData.set([]);
      });
  }

  // Refresh the selectedData store after updates
  afterUpdate(() => {
    const artccPireps = Object.entries(pirepData);

    // Check if there are any pireps for the selected ARTCC
    if (artccPireps.length > 0) {
      selectedData.set(artccPireps);
    } else {
      selectedData.set([]);
    }
  });

  onMount(() => {
    selectedArtcc = "select artcc";
  });

</script>

<section class="container">
  <h2>Select your ARTCC</h2>
  <div class="dropdown-container">
    <select bind:value={selectedArtcc} on:change={handleArtccChange}>
      <option disabled>select artcc</option>
      {#each artccs as { id, name } (id)}
        <option value={id.toLowerCase()}>{name}</option>
      {/each}
    </select>
  </div>

{#if selectedArtcc !== 'select artcc'}
  {#if selectedData && Array.isArray(selectedData)}
    <div>
      <table class="table-style">
        <thead>
          <tr>
            <th>Callsign</th>
            <th>Location</th>
            <th>Altitude</th>
            <th>Aircraft Type</th>
            <th>Turbulence</th>
            <th>Remarks</th>
            <!-- New fields -->
            <th>Type</th>
            <th>Time</th>
            <th>Flight Level</th>
            <th>Sky</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {#each selectedData as [callsign, details]}
            <tr>
              <td>{callsign}</td>
              <td>{details?.location || 'not reported'}</td>
              <td>{details?.altitude || 'not reported'}</td>
              <td>{details?.aircraft_type || 'not reported'}</td>
              <td>{details?.turbulence || 'not reported'}</td>
              <td>{details?.remarks || 'not reported'}</td>
              <!-- New fields -->
              <td>{details?.type || 'not reported'}</td>
              <td>{details?.time || 'not reported'}</td>
              <td>{details?.flight_level || 'not reported'}</td>
              <td>{details?.sky || 'not reported'}</td>
              <td>{details?.weather || 'not reported'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="no-pirep">No current PIREPs for this ARTCC.</p>
  {/if}
{/if}
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
  }

  h2 {
    margin-bottom: 10px;
    color: white;
  }

  .dropdown-container {
    margin-bottom: 20px;
    display: flex;
    margin-right: 0px;
  }

  .table-style {
    color: black;
    background-color: white;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  .no-pirep {
    color: white;
  }
</style>
