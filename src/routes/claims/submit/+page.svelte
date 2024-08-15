<script>
  import { goto } from '$app/navigation'; // Import the goto function

  let claimDetails = '';
  let digitalBillUrl = '';

  async function handleSubmitClaim() {
    try {
      const response = await fetch('/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          claimDetails,
          digitalBillUrl,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form fields
        claimDetails = '';
        digitalBillUrl = '';
        // Redirect to claims status page
        goto('/claims');
      } else {
        alert(result.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error submitting claim:', error);
      alert('An error occurred');
    }
  }
</script>

<h1>Submit a New Claim</h1>

<form on:submit|preventDefault={handleSubmitClaim}>
  <label for="claimDetails">Claim Details</label>
  <input type="text" id="claimDetails" bind:value={claimDetails} placeholder="Claim Details" required />

  <label for="digitalBillUrl">Attach Digital Bill (URL)</label>
  <input type="url" id="digitalBillUrl" bind:value={digitalBillUrl} placeholder="Enter URL of the Digital Bill" required />

  <div class="button-container">
    <button class="cta-button" type="submit">Submit Claim</button>
  </div>
</form>




<style>
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: var(--primary-color);
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

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  textarea,
  input[type="file"] {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid transparent;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-color);
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }

  textarea:focus,
  input[type="file"]:focus {
    border-color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.2);
    outline: none;
  }

  textarea {
    resize: none;
    height: 150px;
  }

  button {
    width: 100%;
    padding: 15px;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  button:hover {
    background-color: var(--button-hover-color);
    transform: translateY(-3px);
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
