/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
/* index.js */
import '@/style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import GoogleAnalytics from '@/app/_components/lib/GoogleAnalytics';

export const metadata = {
  title: 'GAZAS CHILD READ HOPE',
  description: 'cheering for GAZA',
  httpEquiv: 'Content-Security-Policy',
  content: 'upgrade-insecure-requests',
};

const RootLayout = ({ children }) => {
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
        <GoogleAnalytics />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
