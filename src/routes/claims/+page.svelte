<!-- src/routes/claims/index.svelte -->
<script>
    let claims = [
      { claimId: '001', status: 'Pending', details: 'Claim details for 001' },
      { claimId: '002', status: 'Approved', details: 'Claim details for 002' }
    ];
  </script>
  
  <h1>Your Claims</h1>
  
  <ul>
    {#each claims as claim}
      <li>
        <p>Claim ID: {claim.claimId}</p>
        <p>Status: {claim.status}</p>
        <a href={`/claims/${claim.claimId}`}>View Details</a>
      </li>
    {/each}
  </ul>
  
  <a href="/claims/submit">Submit a New Claim</a>
  