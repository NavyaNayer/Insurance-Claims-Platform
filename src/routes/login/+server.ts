import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import pkg from 'pg';
const { Pool } = pkg; // Adjust the import path according to your setup

const pool = new Pool({
    connectionString: "postgres://default:Yofyb9iwvh7a@ep-holy-poetry-a4na75bm-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

export const POST: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();

  try {
    // Fetch user from the database
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const user = rows[0];

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    }

    // Successful login
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error logging in user:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
