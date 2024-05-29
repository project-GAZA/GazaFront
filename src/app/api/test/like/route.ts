import { clickLike } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const valid = ({ ip, message_id }) => {
    const ipv4Pattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ip && !ipv4Pattern.test(ip))
      throw Error(`ip에 올바른 아이피를 입력해주세요. ip:${ip}`);
    if (message_id === null || message_id === undefined)
      throw Error(`message_id값은 필수입니다. `);
  };
  try {
    const { ip, message_id } = await req.json();
    valid({ ip, message_id });
    const str = await clickLike(message_id, ip);
    return Response.json({ success: str }, { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
