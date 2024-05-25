import { updateMessage } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const valid = ({ id, username, content, amount }) => {
    if (typeof parseInt(id, 10) !== 'number')
      throw Error(`id값은 정수입니다. id:${id}`);
    if (typeof username !== 'string') throw Error(`username값을 입력해주세요.`);
    if (username.length < 2 || username.length > 12)
      throw Error(`username은 2글자 이상 12글자 이하입니다.`);
    if (typeof content !== 'string') throw Error(`content값을 입력해주세요.`);
    if (amount === null || amount === undefined) return;
    if (typeof amount !== 'number')
      throw Error(`amount값은 정수입니다. amount:${amount}`);
  };

  try {
    const { id } = params;
    const { username, content, amount } = await req.json();
    valid({ id, username, content, amount });
    await updateMessage(id, username, content, amount);
    return Response.json(true, { status: 200 });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
