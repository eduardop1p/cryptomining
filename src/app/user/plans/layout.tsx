import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Mining | Plans',
  description: 'Crypto Mining Plans',
};

export default function Layout(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
