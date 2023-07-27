import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Crypto Mining | Terms Service',
  description: 'Crypto Mining terms service',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
