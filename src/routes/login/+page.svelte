<!-- src/routes/login/+page.svelte -->
<script>
    let email = '';
    let password = '';
  
    function handleLogin() {
      // Add login logic here
      console.log('Login', { email, password });
    }
  </script>
  
  <h1>Welcome Back</h1>
  
  <form on:submit|preventDefault={handleLogin}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
  
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} placeholder="Enter your password" required />
  
    <button type="submit">Login</button>
  </form>
  
  <p>Don't have an account? <a href="/register">Register now</a></p>
  
  <style>
    h1 {
      color: var(--primary-color);
    }
  
    form {
      background-color: var(--secondary-color);
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
      background-color: var(--button-color);
      color: var(--secondary-color);
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: var(--button-hover-color);
    }
  
    p {
      text-align: center;
    }
  
    a {
      color: var(--primary-color);
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  