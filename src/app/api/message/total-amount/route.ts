import instance from '@/utils/serveraxios';

export async function GET() {
  try {
    const { data } = await instance.get(`/message/total-amount`);
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
export async function POST() {
  return Response.json(2);
}
