import instance from '@/utils/serveraxios';
import getIpInfo from '@/utils/ipInfo';
import { NextRequest } from 'next/server';
import { SituationType } from '@/types/dataType';

export async function GET(req: NextRequest) {
  try {
    const { data } = await instance.get(`/situation`);
    console.log(data);
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const resdata = await req.json();
    const field = req.nextUrl.searchParams.get('field');
    if (field === null) {
      throw new Error('필드 값을 파라미터로 입력해주세요!');
    }

    const { data } = await instance.patch(`/message?field=${field}`, {
      id: resdata.id,
      value: resdata.value,
    });
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
