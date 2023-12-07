import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-named-as-default
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const messageid = searchParams.get('messageid');
    const response = await axiosInstance.get(`/api/message/alert/${messageid}`);

    if (response.status === 200) {
      return NextResponse.json(response.data);
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
