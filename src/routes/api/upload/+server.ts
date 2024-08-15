import type { RequestHandler } from '@sveltejs/kit';
import { Readable } from 'stream';
import sharp from 'sharp';

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get('digitalBill') as File;

    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file uploaded' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Read the file and process it
    const fileBuffer = await file.arrayBuffer();
    const processedImageBuffer = await sharp(Buffer.from(fileBuffer))
      .rotate()
      .resize({ width: 200, height: 200 })
      .webp()
      .toBuffer();

    // Create base64 data URI from the processed image
    const base64Image = `data:image/webp;base64,${processedImageBuffer.toString('base64')}`;

    return new Response(
      JSON.stringify({ src: base64Image }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error processing file:', err);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
