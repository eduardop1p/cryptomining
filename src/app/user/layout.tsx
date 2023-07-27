import React from 'react';
import { cookies } from 'next/headers';

import Header from '@/components/header';
import FooterWihtAuth from '@/components/footerWithAuth';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = cookies().has('token');
  const token = cookies().get('token')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/get-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'get',
    // cache: 'no-cache',
  });
  const { user } = await data.json();

  return (
    <>
      <Header
        fixedNav={false}
        registerOrLogin={false}
        bigPadding={true}
        isAuth={isAuth}
        userName={user.name}
      />
      {children}
      <FooterWihtAuth />
    </>
  );
}
