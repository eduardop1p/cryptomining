// obs: o middleware tem que ficar na raiz da pasta src para abragir todas as rotas

import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line
export function middleware(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next();
  const cookies = req.cookies;
  const isAuth = cookies.has('token');
  const currentPath = req.nextUrl.pathname;

  if (
    (currentPath === '/' && isAuth) ||
    (currentPath === '/register' && isAuth) ||
    (currentPath === '/login' && isAuth) ||
    (currentPath === '/password/reset' && isAuth)
  ) {
    return NextResponse.redirect(new URL('/user/dasboard', req.url));
  }
  if (
    (currentPath === '/logout' && !isAuth) ||
    (currentPath === '/user/dasboard' && !isAuth)
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // console.log(currentPath);
  // console.log(cookies.get('token'));

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
  matcher: [
    '/api(.*)',
    '/',
    '/user/dasboard',
    '/register',
    '/login',
    '/password/reset',
    '/logout',
  ],
};
