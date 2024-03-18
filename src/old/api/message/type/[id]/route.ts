import { NextResponse } from 'next/server';
import axiosInstance from '../../../axiosInstance';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params; // 'a', 'b', or 'c'
    const { type } = await req.json();
    const response = await axiosInstance.patch(`api/message/type/${id}`, {
      donateType: type,
    });
    if (response.status === 200) return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
