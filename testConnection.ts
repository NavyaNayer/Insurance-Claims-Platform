import { Pool } from 'pg';

// Create a new pool instance
const pool = new Pool({
  connectionString: 'postgres://default:Yofyb9iwvh7a@ep-holy-poetry-a4na75bm-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

async function testConnection() {
  try {
    // Test the connection
    await pool.query('SELECT NOW()');
    console.log('Connection successful');
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await pool.end();
  }
}

testConnection();
