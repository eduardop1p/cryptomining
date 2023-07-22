/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';
import jwt from 'jsonwebtoken';

export default function Auth({ children }: { children: React.ReactNode }) {
  const urlPath = usePathname();

  // eslint-disable-next-line
  let auth: any = localStorage.getItem('auth');

  if (!auth && urlPath.includes('/user/dasboard')) {
    redirect('/login');
  }

  if (!auth) {
    return <>{children}</>;
  }

  auth = JSON.parse(auth);

  const tokenPayload: any = jwt.decode(auth.token, { complete: true })?.payload;

  const dateNow = Date.now();
  const tokenExp = tokenPayload.exp * 1000;

  if (dateNow > tokenExp) {
    localStorage.removeItem('auth');
    redirect('/login');
  }

  if (
    urlPath === '/' ||
    urlPath === '/password/reset' ||
    urlPath === '/login' ||
    urlPath === '/register'
  ) {
    redirect('/user/dasboard');
  }

  return <>{children}</>;
}
