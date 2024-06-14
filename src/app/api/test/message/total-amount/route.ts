import { getMessage } from '@/utils/dbController';

export async function GET() {
  try {
    const data = await getMessage();
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
