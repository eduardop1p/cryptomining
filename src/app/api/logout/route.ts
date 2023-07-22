/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest, res: NextResponse) {
  cookies().set({
    name: 'token',
    value: '',
    expires: 0,
    path: '/',
    httpOnly: true,
  });

  return NextResponse.json({
    message: 'success logout',
  });
}
