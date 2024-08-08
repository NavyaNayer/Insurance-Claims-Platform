<!-- src/routes/policies/index.svelte -->
<script>
    let policies = [
      { policyNumber: '123456', provider: 'Provider A', coverageDetails: 'Coverage A' },
      { policyNumber: '789012', provider: 'Provider B', coverageDetails: 'Coverage B' }
    ];
  </script>
  
  <h1>Your Policies</h1>
  
  <ul>
    {#each policies as policy}
      <li>
        <p>Policy Number: {policy.policyNumber}</p>
        <p>Provider: {policy.provider}</p>
        <p>Coverage: {policy.coverageDetails}</p>
        <a href={`/policies/${policy.policyNumber}`}>View Details</a>
      </li>
    {/each}
  </ul>
  
  <a href="/policies/add">Add a New Policy</a>
  