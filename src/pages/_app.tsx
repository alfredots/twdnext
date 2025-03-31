import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { QueryProvider } from '@/shared/providers/query-providers';

export const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider activateDevTools>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </QueryProvider>
  );
}
