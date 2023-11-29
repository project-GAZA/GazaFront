/* eslint-disable @next/next/no-sync-scripts */
import './style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'PEACE IN GAZA',
  description: 'cheering for GAZA',
  httpEquiv: 'Content-Security-Policy',
  content: 'upgrade-insecure-requests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <meta />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
