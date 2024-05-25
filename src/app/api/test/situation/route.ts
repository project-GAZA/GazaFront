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

export async function PUT(req) {
  try {
    const resdata = await req.json();
    const field = req.nextUrl.searchParams.get('field');
    const d = updateMessage(resdata.id, field, resdata.value);
    return Response.json(d);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
