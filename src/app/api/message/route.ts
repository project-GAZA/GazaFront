import instance from '@/utils/serveraxios';
import getIpInfo from '@/utils/ipInfo';
import { NextRequest } from 'next/server';
import { MessageType } from '@/types/dataType';

export async function GET(req: NextRequest) {
  try {
    const sort = req.nextUrl.searchParams.get('sort');
    const page = req.nextUrl.searchParams.get('page');
    const size = req.nextUrl.searchParams.get('size');
    const { data } = await instance.get(
      `/message?sort=${sort}&page=${page}&size=${size}`,
    );
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const ipinfo = await getIpInfo(req);
    const resData = await instance.post<MessageType>('/message', {
      nation: ipinfo.nation,
      latitude: ipinfo.latitude,
      longitude: ipinfo.longitude,
      content: data.content,
      nickname: data.nick,
    });
    return Response.json(resData.data);
  } catch (e) {
    return Response.json({ error: '에러' });
  }
}
