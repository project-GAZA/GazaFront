import { NextResponse } from 'next/server';
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const username = searchParams.get('username');
    const size = searchParams.get('size');
    const page = searchParams.get('page');

    const response = await axiosInstance.post(
      `api/home?size=${size}&page=${page}`,
      {
        username,
      },
    );

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
