<style global>
  @import '../styles/global.css';

  /* Main container for layout */
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--background-light);
  }

  /* Main content area */
  main {
    flex-grow: 1;
    padding: 40px 20px;
    background-color: var(--white);
    border-radius: 12px;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  main:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  /* Header styling */
  header {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-blue));
    color: var(--header-text);
    padding: 15px 30px; /* Adjusted padding for a tighter look */
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }

  header:hover {
    background: linear-gradient(90deg, var(--secondary-blue), var(--primary-color));
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo-container img {
    height: 50px;
    margin-right: 15px;
    transition: transform 0.3s ease;
  }

  .logo-container img:hover {
    transform: scale(1.1);
  }

  .logo-container h1 {
    font-size: 1.8rem;
    margin: 0;
    color: var(--header-text);
    letter-spacing: 1px;
    font-weight: 600; 
  }

  header nav {
    display: flex;
    gap: 20px;
  }

  header a {
    color: var(--header-text);
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.3s ease;
    font-size: 1rem;
    padding-bottom: 5px; 
  }

  header a:hover {
    transform: scale(1.1);
  }

  /* Footer styles */
  footer {
    background-color: var(--footer-bg);
    color: white;
    text-align: center;
    padding: 20px 30px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    left: 0;
    font-size: 0.9rem;
    border-top: 1px solid var(--border-light);
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  footer:hover {
    background-color: var(--footer-hover-bg);
    box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.3); 
  }

  footer p {
    margin: 0;
  }
</style>

<header>
  <!-- Logo and App Name -->
  <div class="logo-container">
    <img src="/logo.png" alt="Insurance Claims Platform Logo">
    <h1>Insurance Claims Platform</h1>
  </div>

  <!-- Navigation Links -->
  <nav>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <a href="/dashboard">Dashboard</a>
  </nav>
</header>

<div class="container">
  <!-- Main Content Area -->
  <main>
    <slot />
  </main>
</div>

<footer>
  <p>&copy; 2024 Insurance Claims Platform. All rights reserved.</p>
</footer>
