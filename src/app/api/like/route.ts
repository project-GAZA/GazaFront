import { NextResponse } from 'next/server';
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const messageid = searchParams.get('messageid');
    const response = await axiosInstance.get(`/api/message/likes/${messageid}`);

    if (response.status === 200) {
      return NextResponse.json(response.data);
    }
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
