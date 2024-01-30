import { NextResponse } from 'next/server';
import axiosInstance from '../../axiosInstance';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params; // 'a', 'b', or 'c'
    const { amount } = await req.json();
    const response = await axiosInstance.patch(`api/donate/${id}`, amount, {
      headers: {
        Authorization: `Bearer ${req.headers.get('Authorization')}`,
      },
    });
    if (response.status === 200) return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
