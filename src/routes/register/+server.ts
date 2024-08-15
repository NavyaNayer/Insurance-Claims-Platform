import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import pkg from 'pg';
const { Pool } = pkg; // Adjust the import path according to your setup
import type { RegisterData } from './types'; // Import the interface
const pool = new Pool({
    connectionString: "postgres://default:Yofyb9iwvh7a@ep-holy-poetry-a4na75bm-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });
export const POST: RequestHandler = async ({ request }) => {
  const data: RegisterData = await request.json();

  const { email, password, confirmPassword } = data;

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ error: 'Passwords do not match' }), { status: 400 });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2)',
      [email, hashedPassword]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error registering user:', error);
    return new Response(JSON.stringify({ error: 'Failed to register' }), { status: 500 });
  }
};
