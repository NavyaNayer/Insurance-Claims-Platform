<h1>Dashboard</h1>

<nav>
  <a href="/policies" class="nav-link">Manage Policies</a>
  <a href="/claims" class="nav-link">Manage Claims</a>
</nav>

<style>
  h1 {
    color: var(--primary-color);
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
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

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
