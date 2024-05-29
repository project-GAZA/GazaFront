import instance from '@/utils/serveraxios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { data } = await instance.get(`/situation`);
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
