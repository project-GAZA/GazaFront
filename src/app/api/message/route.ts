import instance from '@/utils/serveraxios';
import getIpInfo from '@/utils/ipInfo';
// export async function GET(request: Request) {}

export async function POST(req) {
  try {
    const data = await req.json();
    const ipinfo = await getIpInfo(req);
    const resData = await instance.post('/message', {
      nation: ipinfo.nation,
      latitude: ipinfo.latitude,
      longitude: ipinfo.longitude,
      content: data.content,
      nickname: data.nick,
    });
    console.log(resData.data);
    return Response.json(resData.data);
  } catch (e) {
    console.log(e);
    return Response.json({ error: '에러' });
  }
}
