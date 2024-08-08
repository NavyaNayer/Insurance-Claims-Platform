<!-- src/routes/login.svelte -->
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
  