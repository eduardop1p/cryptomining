import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cripto Mining | Forgot Password',
  description: 'Cripto Mining forgot password',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  );
}
