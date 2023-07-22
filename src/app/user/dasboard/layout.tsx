import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cripto Mining | User dasboard',
  description: 'Cripto Mining Dasboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  );
}
