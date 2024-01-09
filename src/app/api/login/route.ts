import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { pwd } = await req.json();
  try {
    const hashedPWD = await bcrypt.hashSync(
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
      10,
    );
    const same = bcrypt.compareSync(pwd, hashedPWD);
    return NextResponse.json(same);
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
