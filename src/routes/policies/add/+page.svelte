<script>
  import { goto } from '$app/navigation'; // Import the goto function

  let policyNumber = '';
  let provider = '';
  let coverageDetails = '';

  async function handleAddPolicy() {
    try {
      const response = await fetch('/api/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          policyNumber,
          provider,
          coverageDetails,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form fields
        policyNumber = '';
        provider = '';
        coverageDetails = '';
        // Redirect to policies page
        goto('/policies');
      } else {
        alert(result.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error adding policy:', error);
      alert('An error occurred');
    }
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

  <div class="button-container">
    <button class="cta-button" type="submit">Add Policy</button>
  </div>
</form>

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: var(--primary-color);
    text-align: center;
    letter-spacing: 1px;
    animation: fadeInDown 0.8s ease-out;
  }

  form {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 15px;
    background: linear-gradient(135deg, var(--secondary-color), var(--secondary-color-light));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    animation: slideInUp 0.8s ease-out;
  }

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  input {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid transparent;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-color);
    transition: border-color 0.3s ease, background-color 0.3s ease;
    margin-bottom: 20px;
    outline: none;
  }

  input:focus {
    border-color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.2);
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .cta-button {
    width: 15%;
    padding: 15px;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  .cta-button:hover {
    background-color: var(--button-hover-color);
    transform: translateY(-2px);
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
