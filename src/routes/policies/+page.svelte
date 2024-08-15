<script lang="ts">
  interface Policy {
    policy_number: string;
    provider: string;
    coverage_details: string;
  }
  export { load } from './+page';
  export let data;
  
  console.log('policy1 in component:', data);
</script>


<h1>Your Policies</h1>
<center><a class="nav-link" href="/policies/add">Add a New Policy</a></center>
<br><br>
<ul class="policy-list">
  {#each  data?.policies as policy}
    <li class="policy-card">
      <div class="policy-info">
        <p><strong>Policy Number:</strong> {policy.policy_number}</p>
        <p><strong>Provider:</strong> {policy.provider}</p>
        <p><strong>Coverage Details:</strong> {policy.coverage_details}</p>
      </div>
      <a class="details-link" href={`/policies/${policy.policy_number}`}>View Details</a>
    </li>
  {/each}
</ul>

<!--
<ul class="policy-list">
  {#each policies as policy}
    <li class="policy-card">
      <div class="policy-info">
        <p><strong>Policy Number:</strong> {policy.policy_number}</p>
        <p><strong>Provider:</strong> {policy.provider}</p>
        <p><strong>Coverage:</strong> {policy.coverage_details}</p>
      </div>
      <a class="details-link" href={`/policies/notupdated`}>View Details</a>
    </li>
  {/each}
</ul>
-->


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
  
  .nav-link {
    padding: 15px 30px;
    margin-top: 30px;
    margin-bottom: 100px;
    padding: 15px 30px;
    background-color: var(--secondary-color);
    border-radius: 8px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }

  .nav-link:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }



  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
