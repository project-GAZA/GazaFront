import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-named-as-default
import axiosInstance from '../axiosInstance';

export async function GET(req) {
  try {
    const response = await axiosInstance.get(`api/donate`);
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
