<!-- src/routes/claims/[claimId].svelte -->
<script>
    export let params;
    let claimId = params.claimId;
  
    // Fetch claim details based on claimId
    let claim = { claimId: claimId, status: 'Pending', details: 'Claim details for ' + claimId, updateHistory: 'Update history' };
  </script>
  
  <h1>Claim Details</h1>
  
  <p>Claim ID: {claim.claimId}</p>
  <p>Status: {claim.status}</p>
  <p>Details: {claim.details}</p>
  <p>Update History: {claim.updateHistory}</p>
  