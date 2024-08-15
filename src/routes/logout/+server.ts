import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Clear the session cookie by setting an expired date
    const cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';

    return new Response(
      JSON.stringify({ message: 'Logged out successfully' }),
      { status: 200, headers: { 'Set-Cookie': cookie } }
    );
  } catch (error) {
    console.error('Error during logout:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
};
