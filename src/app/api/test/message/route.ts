import { inputMessage, getMessage, updateMessage } from '@/utils/dbController';
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

export async function POST(req) {
  try {
    const data = await req.json();
    const d = await inputMessage(data);
    return Response.json(d);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const resdata = await req.json();
    const field = req.nextUrl.searchParams.get('field');
    const d = updateMessage(resdata.id, field, resdata.value);
    return Response.json(d);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
