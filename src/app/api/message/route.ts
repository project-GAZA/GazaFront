import instance from '@/utils/serveraxios';
import getIpInfo from '@/utils/ipInfo';

export async function GET(req: any) {
  try {
    const sort = req.nextUrl.searchParams.get('sort');
    const page = req.nextUrl.searchParams.get('page');
    const size = req.nextUrl.searchParams.get('size');
    const ipinfo = await getIpInfo(req);
    console.log(ipinfo);
    const { data } = await instance.get(
      `/message?sort=${sort}&page=${page}&size=${size}&ip=${ipinfo.ip}`,
    );
    console.log(
      `/message?sort=${sort}&page=${page}&size=${size}&ip=${ipinfo.ip}`,
      data,
    );
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 502 });
  }
}

export async function POST(req: any) {
  try {
    const { content, username, amount } = await req.json();
    const ipinfo = await getIpInfo(req);
    const { data } = await instance.post('/message', {
      nation: ipinfo.nation,
      latitude: Number(ipinfo.latitude),
      longitude: Number(ipinfo.longitude),
      content,
      username,
      amount,
    });
    return Response.json(data);
  } catch (e: any) {
    return Response.json({ error: e.message });
  }
}
