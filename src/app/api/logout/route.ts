/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET(req: NextRequest, res: NextResponse) {
  return new Response(JSON.stringify({ message: 'success logout' }), {
    status: 200,
    headers: {
      'Set-Cookie': serialize('token', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/',
      }),
      'Content-Type': 'application/json',
    },
  });
}
