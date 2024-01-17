import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';
import axiosInstance from '../../axiosInstance';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const size = searchParams.get('size');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');

    const response = await axiosInstance.get(
      `api/donate/all?page=${page}&size=${size}&sort=${sort}`,
      {
        headers: {
          Authorization: `Bearer ${req.headers.get('Authorization')}`,
        },
      },
    );
    /*
    const response = await axiosInstance.get(
      `api/donate/all?page=0&size=100&sort=New`,
    );
    */
    if (response.status === 200) {
      return NextResponse.json(response.data);
    }
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
