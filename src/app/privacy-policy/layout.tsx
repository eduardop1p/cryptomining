import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Crypto Mining | Privacy Policy',
  description: 'Crypto Mining privacy policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
