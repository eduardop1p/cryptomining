// obs: o middleware tem que ficar na raiz da pasta src para abragir todas as rotas

// import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line
export function middleware(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next();

  response.headers.append(
    'Access-Control-Allow-Origin',
    process.env.NEXT_PUBLIC_URL as string
  );

  return response;
}

// filter urls middleware set
export const config = {
  /*
   com esse matcher middleware irar passar em todas as rotas que começam com o path api incluindo a index
   para o middleware passar somente nas rotas a patir do path api usamos o matcher '/api/:path*' ou '/api/(.*)'
  */
  matcher: ['/api(.*)'],
};
