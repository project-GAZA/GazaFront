import { NextResponse } from 'next/server';
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const size = searchParams.get('size');
    const username: string = searchParams.get('username');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');

    const response = await axiosInstance.get(
      `api/home?page=${page}&size=${size}&sort=${sort}${
        username !== null && `&username=${username}`
      }`,
    );

    if (response.status === 200) {
      return NextResponse.json(response.data);
    }
  } catch (err) {
    // console.log(Object.keys(err));
    // console.log(err.message);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
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
      return NextResponse.json(response.data);
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err.response.data.message },
      { status: 451 },
    );
  }
}
