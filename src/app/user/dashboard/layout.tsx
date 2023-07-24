import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cripto Mining | User Dashboard',
  description: 'Cripto Mining Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  );
}
