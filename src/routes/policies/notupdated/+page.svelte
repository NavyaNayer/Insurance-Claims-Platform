<script>
    // You can add any script logic here if needed
  </script>
  
  <section class="hero">
    <div class="hero-content">
        <h1>Page To Be Updated....</h1>
    </div>
  </section>
  
  <style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f4f8;
        margin: 0;
        padding: 0;
    }
  
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 20px;
    }
  
    .hero-content {
        max-width: 1200px; /* Increase the max-width to match the new banner width */
        width: 100%; /* Ensure the content takes full width */
    }
  
    h1 {
        font-size: 3.5rem;
        margin-bottom: 20px;
        animation: fadeIn 1s ease-in-out;
    }
  
    p {
        font-size: 1.5rem;
        margin-bottom: 20px;
        animation: fadeIn 1.5s ease-in-out;
    }
  
    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
        animation: fadeIn 2s ease-in-out;
    }
  
    .cta-button {
        background-color: white;
        color: #007BFF;
        padding: 15px 30px;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    }
  
    .cta-button:hover {
        background-color: #007BFF;
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  
    .banner-wrapper {
        width: 100%;
        max-width: 1200px; /* Increase the max-width of the banner */
        margin-top: 20px; /* Space above the banner */
        overflow: hidden;
    }
  
    .banner-image {
        width: 100%; /* Full width of its container */
        height: auto;
        display: block;
    }
  
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
  </style>
  