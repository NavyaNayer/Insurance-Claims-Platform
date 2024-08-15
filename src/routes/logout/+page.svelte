<script lang="ts">
    let message: string = '';
    
    const handleLogout = async () => {
      try {
        const response = await fetch('/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
  
        const result = await response.json();
  
        if (response.ok) {
          message = result.message || 'Logged out successfully!';
          // Redirect after a short delay
          setTimeout(() => {
            window.location.href = '/login'; // Redirect to login or home page
          }, 2000); // Adjust delay as needed
        } else {
          message = result.error || 'Logout failed. Please try again.';
        }
      } catch (error) {
        message = 'An unexpected error occurred.';
        console.error('Logout error:', error); // Log to console for debugging
      }
    };
  </script>
  
  <style>
    .message {
      margin-top: 10px;
    }
    /* Add additional styles here */
  </style>
  
  <main>
    <header>Logout</header>
    
    <button on:click={handleLogout}>Logout</button>
  
    {#if message}
      <p class="message">{message}</p>
    {/if}
  </main>
  