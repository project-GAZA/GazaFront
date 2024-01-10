import { NextResponse } from 'next/server';
import axiosInstance from '@/app/api/axiosInstance';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    const response = await axiosInstance.get(`api/message`);

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
