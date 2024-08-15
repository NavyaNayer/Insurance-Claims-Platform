<script lang="ts">
  interface Claim {
    id: number;
    claim_details: string;
    digital_bill_url: string;
    status: string;
  }

  export { load } from './+page';
  export let data;

  console.log('claims data:', data);
</script>

<h1>Your Claims</h1>
<br>
<center><a class="nav-link" href="/claims/submit">Submit a New Claim</a></center>
<br>

<div class="claims-container">
  {#each data?.claims as claim, i}
    <div class="claim-card" style="animation-delay: {i * 0.2}s">
      <div class="claim-header">
        <h2>Claim ID: {claim.id}</h2>
        <span class="status {claim.status.toLowerCase()}">{claim.status}</span>
      </div>
      <p>{claim.claim_description}</p>
      <a class="view-details" href={`/claims/notupdated`}>View Details</a>
    </div>
  {/each}
</div>


<style>
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--primary-color);
    animation: fadeIn 1s ease-in-out;
  }

  .claims-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
  }

  .claim-card {
    background-color: var(--secondary-color);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.5s ease-out forwards;
    transition: box-shadow 0.3s, transform 0.3s;
  }

  .claim-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .claim-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--text-color);
  }

  .status {
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .status.pending {
    background-color: #ffcc00;
    color: #333;
  }

  .status.approved {
    background-color: #4caf50;
    color: white;
  }

  p {
    color: var(--text-color);
    margin-bottom: 15px;
  }

  .view-details {
    display: inline-block;
    padding: 10px 15px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  .view-details:hover {
    background-color: var(--button-hover-color);
  }

  .submit-claim {
    display: block;
    text-align: center;
    padding: 15px 20px;
    margin: 20px auto;
    background-color: var(--primary-color);
    color: white;
    border-radius: 12px;
    width: fit-content;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  .submit-claim:hover {
    background-color: var(--button-hover-color);
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


  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
