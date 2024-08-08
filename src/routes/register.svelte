<!-- src/routes/register.svelte -->
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
  