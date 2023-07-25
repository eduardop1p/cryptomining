import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Mining | Forgot Password',
  description: 'Crypto Mining forgot password',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  );
}
