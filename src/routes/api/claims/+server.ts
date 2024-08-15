import type { RequestHandler } from '@sveltejs/kit';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://default:Yofyb9iwvh7a@ep-holy-poetry-a4na75bm-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export const GET: RequestHandler = async () => {
  try {
    const { rows: claims } = await pool.query('SELECT * FROM claims ORDER BY id');
    return new Response(JSON.stringify(claims), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Error fetching claims:', err);
    return new Response(JSON.stringify({ error: 'Error fetching claims' }), { status: 500 });
  }
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    console.log('In POSt of Claim Submit');
    const { claimDetails, digitalBillUrl } = await request.json();

    // Insert claim into the database
    await pool.query(
      'INSERT INTO claims (claim_description, digital_bills, status) VALUES ($1, $2, $3)',
      [claimDetails, digitalBillUrl, 'Pending']
    );
    console.log('Insert done !!');

    return new Response(JSON.stringify({ message: 'Claim submitted successfully!' }), { status: 200 });
  } catch (err) {
    console.error('Error submitting claim:', err);
    return new Response(JSON.stringify({ error: 'Error submitting claim' }), { status: 500 });
  }
};
