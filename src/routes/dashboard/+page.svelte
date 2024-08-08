<!-- src/routes/dashboard/+page.svelte -->
<h1>Dashboard</h1>

<nav>
  <a href="/policies">Manage Policies</a>
  <a href="/claims">Manage Claims</a>
</nav>

<style>
  h1 {
    color: #4CAF50;
  }

  nav a {
    display: block;
    margin: 10px 0;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-decoration: none;
    color: #333;
  }

  nav a:hover {
    background-color: #f1f1f1;
  }
</style>
