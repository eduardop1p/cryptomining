import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Crypto Mining | Cookie Policy',
  description: 'Crypto Mining cookie policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
