import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://default:Yofyb9iwvh7a@ep-holy-poetry-a4na75bm-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function GET() {
    try {
        console.log('in GET');
      const { rows: policies } = await pool.query('SELECT * FROM policies ORDER BY id');
      console.log(JSON.stringify({ policies }));
      return new Response(JSON.stringify({ policies }), { status: 200 });
    } catch (error) {
      console.error('Error fetching policies:', error);
      return new Response(JSON.stringify({ policies: [] }), { status: 500 });
    }
  }

export async function POST({ request }: { request: Request }) {
  try {
    const data = await request.json();
    console.log("data=",data);
    const { policyNumber, provider, coverageDetails } = data;

    const result = await pool.query(
      'INSERT INTO policies (policy_number, provider, coverage_details) VALUES ($1, $2, $3) RETURNING *',
      [policyNumber, provider, coverageDetails]
    );
    console.log('result=', result);
console.log('stringify=',JSON.stringify(result.rows[0]));
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (err) {
    console.error('Error inserting data', err);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
