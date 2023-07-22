'use client';

import React from 'react';

import type { Metadata } from 'next';
import Auth from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Cripto Mining | Sign In',
  description: 'Cripto Mining login',
  keywords: 'cloud mining',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Auth>{children}</Auth>;
}
