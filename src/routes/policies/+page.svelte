<script>
  let policies = [
    { policyNumber: '123456', provider: 'Provider A', coverageDetails: 'Coverage A' },
    { policyNumber: '789012', provider: 'Provider B', coverageDetails: 'Coverage B' }
  ];
</script>

<h1>Your Policies</h1>

<ul class="policy-list">
  {#each policies as policy}
    <li class="policy-card">
      <div class="policy-info">
        <p><strong>Policy Number:</strong> {policy.policyNumber}</p>
        <p><strong>Provider:</strong> {policy.provider}</p>
        <p><strong>Coverage:</strong> {policy.coverageDetails}</p>
      </div>
      <a class="details-link" href={`/policies/notupdated`}>View Details</a>
    </li>
  {/each}
</ul>

<center><a class="add-policy-button" href="/policies/add">Add a New Policy</a></center>

<style>
  h1 {
    color: var(--primary-color);
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    animation: fadeIn 1s ease-in-out;
  }

  .policy-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .policy-card {
    background-color: var(--secondary-color);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.3s, transform 0.3s;
  }

  .policy-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  .policy-info p {
    margin: 5px 0;
    font-size: 1rem;
    color: var(--text-color);
  }

  .details-link {
    background-color: var(--button-color);
    color: var(--secondary-color);
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .details-link:hover {
    background-color: var(--button-hover-color);
  }

  .add-policy-button {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 30px;
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }

  .add-policy-button:hover {
    background-color: var(--button-hover-color);
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
