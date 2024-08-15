<script lang="ts">
  import type { RegisterData } from './types'; // Adjust the import path according to your setup
  import { goto } from '$app/navigation'; // If using SvelteKit

  let email: string = '';
  let password: string = '';
  let confirmPassword: string = '';
  let errorMessage: string = '';
  let successMessage: string = '';

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    
    // Clear messages
    errorMessage = '';
    successMessage = '';

    // Validate inputs
    if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match.';
      return;
    }

    const data: RegisterData = { email, password, confirmPassword };

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        successMessage = 'Registration successful. You can now log in.';
        // Redirect to login page
        goto('/login'); // Use window.location.href if not using SvelteKit
      } else {
        // Handle specific error messages
        if (result.error === 'User already exists') {
          errorMessage = 'User already exists. <a href="/login" class="link">Log in here</a>';
        } else {
          errorMessage = result.error || 'Registration failed. Please try again.';
        }
      }
    } catch (error) {
      errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  };
</script>


<h1>Create Your Account</h1>

<form on:submit|preventDefault={handleSubmit}>
  <div class="input-group">
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
  </div>

  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} placeholder="Create a password" required />
  </div>

  <div class="input-group">
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" bind:value={confirmPassword} placeholder="Confirm your password" required />
  </div>

  <!-- Register Button -->
  <center><button type="submit" class="nav-link">Register</button></center>

  <!-- Display Messages -->
  {#if errorMessage}
    <p>{@html errorMessage}</p>
  {/if}
  {#if successMessage}
    <p>{successMessage}</p>
  {/if}
</form>



<p>Already have an account? <a href="/login" class="cta-link">Login here</a></p>

<style>
  h1 {
      color: var(--primary-color);
      text-align: center;
      font-size: 2rem;
      margin-bottom: 20px;
      animation: fadeIn 1s ease-in-out;
  }

  form {
      background-color: var(--secondary-color);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      max-width: 450px;
      margin: auto;
      transition: box-shadow 0.3s ease;
  }

  form:hover {
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  .input-group {
      margin-bottom: 20px;
      position: relative;
  }

  label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: black;
      transition: color 0.3s;
  }

  input {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 1rem;
      transition: border-color 0.3s;
  }

  input:focus {
      border-color: var(--primary-color);
      outline: none;
  }

  .cta-button {
      background-color: var(--primary-color);
      color: white;
      padding: 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      font-size: 1rem;
      font-weight: bold;
      transition: background-color 0.3s, transform 0.3s;
  }

  .cta-button:hover {
      background-color: var(--button-hover-color);
      transform: translateY(-3px);
  }


  .nav-link {
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




  p {
      text-align: center;
      margin-top: 20px;
      font-size: 0.9rem;
  }

  .cta-link {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
  }

  .cta-link:hover {
      color: var(--button-hover-color);
  }

  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
  }
</style>
