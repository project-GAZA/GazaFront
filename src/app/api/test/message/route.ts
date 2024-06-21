import { inputMessage, getMessage } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Query 체크
  const valid = ({ sort, page, size, ip }) => {
    if (sort !== 'new' && sort !== 'best')
      throw Error(`Sort에 올바른 파라미터를 전달해주세요. sort:${sort}`);
    if (typeof parseInt(page, 10) !== 'number')
      throw Error(`page에 0또는 자연수를 전달해주세요. page:${page}`);
    if (typeof parseInt(size, 10) !== 'number')
      throw Error(`size에 0또는 자연수를 전달해주세요. size:${size}`);
    const ipv4Pattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ip && !ipv4Pattern.test(ip))
      throw Error(`ip에 올바른 아이피를 입력해주세요. ip:${ip}`);
  };

  try {
    const sort = req.nextUrl.searchParams.get('sort') || 'new';
    const page = req.nextUrl.searchParams.get('page') || '0';
    const size = req.nextUrl.searchParams.get('size') || '20';
    const ip = req.nextUrl.searchParams.get('ip') || '127.0.0.1';
    valid({ sort, page, size, ip });
    const data = await getMessage(
      parseInt(size, 10),
      sort,
      parseInt(page, 10),
      ip,
    );
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const valid = ({
    nation,
    latitude,
    longitude,
    content,
    username,
    amount,
  }) => {
    if (typeof nation !== 'string')
      throw Error(`유효한 nation값을 입력해주세요 nation:${nation}`);
    if (typeof latitude !== 'number')
      throw Error(`유효한 latitude값을 입력해주세요 latitude:${latitude}`);
    if (typeof longitude !== 'number')
      throw Error(`유효한 longitude값을 입력해주세요 longitude:${longitude}`);
    if (typeof content !== 'string')
      throw Error(`유효한 content값을 입력해주세요 content:${content}`);
    if (typeof username !== 'string')
      throw Error(`유효한 username값을 입력해주세요 username:${username}`);
    if (username.length < 2 || username.length > 12)
      throw Error('유저이름은 2글자이상,12글자 이하입니다.');
    if (amount === null || amount === undefined) return;
    if (typeof parseInt(amount, 10) !== 'number')
      throw Error(`유효한 amount값을 입력해주세요 amount:${amount}`);
  };
  try {
    const { nation, latitude, longitude, content, username, amount } =
      await req.json();
    valid({
      nation,
      latitude,
      longitude,
      content,
      username,
      amount,
    });
    await inputMessage({
      username,
      latitude,
      longitude,
      content,
      nation,
      amount: amount || 0,
    });
    return Response.json(true, { status: 200 });
  } catch (e: any) {
    console.log(e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
