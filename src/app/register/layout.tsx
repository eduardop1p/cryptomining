import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cripto Mining | Sign Up',
  description: 'Cripto Mining Create account',
  keywords: 'cloud mining',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
