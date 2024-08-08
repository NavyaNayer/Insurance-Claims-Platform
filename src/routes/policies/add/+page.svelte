<!-- src/routes/policies/add.svelte -->
<script>
    let policyNumber = '';
    let provider = '';
    let coverageDetails = '';
  
    function handleAddPolicy() {
      // Add policy logic here
      console.log('Add Policy', { policyNumber, provider, coverageDetails });
    }
  </script>
  
  <h1>Add a New Policy</h1>
  
  <form on:submit|preventDefault={handleAddPolicy}>
    <label for="policyNumber">Policy Number</label>
    <input type="text" id="policyNumber" bind:value={policyNumber} placeholder="Policy Number" required />
  
    <label for="provider">Provider</label>
    <input type="text" id="provider" bind:value={provider} placeholder="Provider" required />
  
    <label for="coverageDetails">Coverage Details</label>
    <input type="text" id="coverageDetails" bind:value={coverageDetails} placeholder="Coverage Details" required />
  
    <button type="submit">Add Policy</button>
  </form>
  