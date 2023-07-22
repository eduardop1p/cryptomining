import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './global.css';

import StyledComponentsRegistry from '@/lib/registry';

// para refresh em links é somente usar os links nativos do html <a href=''></a>

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cripto Mining | Cloud Mining',
  description: 'Cripto Mining - A Digital Mining Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          // para pegar arquivos estaticos no nextjs tenho que levar em conta que public já é referenciado no caminho do arquivo
          href="/assets/imgs/logo-bitcoin-4096.png"
        />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <>{children}</>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
