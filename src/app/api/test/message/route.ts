import { inputMessage, getMessage } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const sort = req.nextUrl.searchParams.get('sort') || 'times';
    const page = Number(req.nextUrl.searchParams.get('page'));
    const size = Number(req.nextUrl.searchParams.get('size'));
    const data = await getMessage(size, sort, page);
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const d = await inputMessage(data);
    return Response.json(d);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
