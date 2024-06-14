import getIpInfo from '@/utils/ipInfo';
import instance from '@/utils/serveraxios';
import { NextRequest } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const { id } = params;
    const ipinfo = await getIpInfo(req);
    const { data } = await instance.post(`/like`, {
      message_id: id,
      ip: ipinfo.ip,
    });
    return Response.json(data, { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
