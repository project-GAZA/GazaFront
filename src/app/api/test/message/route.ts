import { inputMessage } from '@/utils/dbController';

export async function POST(req) {
  try {
    const data = await req.json();
    const d: any = await inputMessage(data);
    return Response.json({ id: d.lastID });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
