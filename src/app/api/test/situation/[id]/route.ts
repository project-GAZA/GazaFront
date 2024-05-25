import { modifySituation } from '@/utils/dbController';
import { NextRequest } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const valid = ({ id, name, value }) => {
    if (typeof parseInt(id, 10) !== 'number')
      throw Error('id의 값을 확인해주세요. 필수 입니다.');
    if (typeof name !== 'string')
      throw Error('name의 값을 확인해주세요. 필수 입니다.');
    if (typeof parseInt(value, 10) !== 'number')
      throw Error('value의 값을 확인해주세요. 양의정수이여야합니다.');
  };

  try {
    const { id } = params;
    const { name, value } = await req.json();
    valid({ id, name, value });
    await modifySituation({ id, name, value });
    return Response.json(true, { status: 200 });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
