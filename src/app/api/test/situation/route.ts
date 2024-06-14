import { getSituation } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const data = await getSituation();
    return Response.json(data);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  return Response.json(2);
}
