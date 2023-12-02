/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import './style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'GAZAS CHILD READ HOPE',
  description: 'cheering for GAZA',
  httpEquiv: 'Content-Security-Policy',
  content: 'upgrade-insecure-requests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
