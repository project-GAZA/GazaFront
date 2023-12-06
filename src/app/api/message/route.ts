import { NextResponse } from 'next/server';
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const size = searchParams.get('size');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');
    const response = await axiosInstance.get(
      `api/home?page=${page}&size=${size}&sort=${sort}`,
    );

    if (response.status === 200) {
      return NextResponse.json(response.data());
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

export async function POST(req) {
  const { username, content } = await req.json();

  try {
    const response = await axiosInstance.post(`/api/message`, {
      content,
      username,
    });

    if (response.status === 200) {
      return NextResponse.json(response.data());
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}