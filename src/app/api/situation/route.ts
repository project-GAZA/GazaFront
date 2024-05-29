import instance from '@/utils/serveraxios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // 빌드 중일 때 API 호출을 방지
  if (process.env.NODE_ENV !== 'production') {
    return new Response(
      JSON.stringify({
        message: 'Skipping API call in non-production environment',
      }),
      { status: 200 },
    );
  }
  try {
    const { data } = await instance.get(`/situation`);
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
