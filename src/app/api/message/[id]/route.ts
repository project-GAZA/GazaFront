import { NextResponse } from 'next/server';
import axiosInstance from '../../axiosInstance';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params; // 'a', 'b', or 'c'
    const response = await axiosInstance.get(`api/message/${id}`, {});
    if (response.status === 200) return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
