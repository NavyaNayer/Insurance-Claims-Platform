<!-- src/routes/register/+page.svelte -->
<script>
    let email = '';
    let password = '';
    let confirmPassword = '';
  
    function handleRegister() {
      // Add registration logic here
      console.log('Register', { email, password, confirmPassword });
    }
  </script>
  
  <h1>Create Your Account</h1>
  
  <form on:submit|preventDefault={handleRegister}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
  
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} placeholder="Create a password" required />
  
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" bind:value={confirmPassword} placeholder="Confirm your password" required />
  
    <button type="submit">Register</button>
  </form>
  
  <p>Already have an account? <a href="/login">Login here</a></p>
  
  <style>
    h1 {
      color: #4CAF50;
    }
  
    form {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: auto;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  
    p {
      text-align: center;
    }
  
    a {
      color: #4CAF50;
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  