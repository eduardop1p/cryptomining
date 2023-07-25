import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Mining | Sign In',
  description: 'Crypto Mining login',
  keywords: 'cloud mining',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
