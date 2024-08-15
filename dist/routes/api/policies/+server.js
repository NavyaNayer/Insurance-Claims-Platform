"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
exports.POST = POST;
const pg_1 = __importDefault(require("pg"));
const { Pool } = pg_1.default;
// Ensure DATABASE_URL is set correctly in your environment variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Adjust SSL based on environment
});
function GET() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield pool.query('SELECT * FROM policies');
            return new Response(JSON.stringify(result.rows), { status: 200 });
        }
        catch (err) {
            console.error('Error executing query', err);
            return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
        }
    });
}
function POST(_a) {
    return __awaiter(this, arguments, void 0, function* ({ request }) {
        try {
            const data = yield request.json();
            const { policyNumber, provider, coverageDetails } = data;
            const result = yield pool.query('INSERT INTO policies (policy_number, provider, coverage_details) VALUES ($1, $2, $3) RETURNING *', [policyNumber, provider, coverageDetails]);
            return new Response(JSON.stringify(result.rows[0]), { status: 201 });
        }
        catch (err) {
            console.error('Error inserting data', err);
            return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
        }
    });
}
