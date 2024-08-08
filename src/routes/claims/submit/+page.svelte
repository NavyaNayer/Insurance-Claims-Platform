<!-- src/routes/claims/submit.svelte -->
<script>
    let claimDetails = '';
    let digitalBills = null;
  
    function handleSubmitClaim() {
      // Submit claim logic here
      console.log('Submit Claim', { claimDetails, digitalBills });
    }
  </script>
  
  <h1>Submit a New Claim</h1>
  
  <form on:submit|preventDefault={handleSubmitClaim}>
    <label for="claimDetails">Claim Details</label>
    <textarea id="claimDetails" bind:value={claimDetails} placeholder="Claim Details" required></textarea>
  
    <label for="digitalBills">Attach Digital Bills</label>
    <input type="file" id="digitalBills" bind:this={digitalBills} />
  
    <button type="submit">Submit Claim</button>
  </form>
  