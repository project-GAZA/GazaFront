import { APIURL } from '@/app/define';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

export async function GET(req, res) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const size = searchParams.get('size');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');
    const response = await fetch(
      `${APIURL}/api/home?page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    );

    if (response.status === 200) {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

export async function POST(req, res) {
  const { username, content } = await req.json();

  try {
    const response = await fetch(`${APIURL}/api/message`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        content,
        username,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
