import { getSituation } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function GET(_req: NextRequest) {
  try {
    const data = await getSituation();
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
