import pg from 'pg';
const { Pool } = pg;
import type { RequestHandler } from '@sveltejs/kit';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// GET all policies
export const GET: RequestHandler = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM policies');
    client.release();
    return new Response(JSON.stringify(res.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

// POST a new policy
export const POST: RequestHandler = async ({ request }) => {
  const { policyNumber, provider, coverageDetails } = await request.json();
  try {
    const client = await pool.connect();
    const res = await client.query(
      'INSERT INTO policies (policy_number, provider, coverage_details) VALUES ($1, $2, $3) RETURNING *',
      [policyNumber, provider, coverageDetails]
    );
    client.release();
    return new Response(JSON.stringify(res.rows[0]), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
