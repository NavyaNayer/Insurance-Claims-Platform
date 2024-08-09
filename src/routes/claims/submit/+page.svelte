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
  <div class="form-group">
    <label for="claimDetails">Claim Details</label>
    <textarea id="claimDetails" bind:value={claimDetails} placeholder="Describe your claim in detail" required></textarea>
  </div>

  <div class="form-group">
    <label for="digitalBills">Attach Digital Bills</label>
    <input type="file" id="digitalBills" bind:this={digitalBills} />
  </div>

  <button type="submit">Submit Claim</button>
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
