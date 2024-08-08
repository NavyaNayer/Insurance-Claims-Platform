<!-- src/routes/+layout.svelte -->
<script>
    export let segment;
  </script>
  
  <style global>
    @import '../styles/global.css';
  </style>
  
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/dashboard">Dashboard</a>
    </nav>
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer>
    <p>&copy; 2024 Insurance Claims Platform</p>
  </footer>
  