import './globals.css';
import { ChakraProvider, ToastProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Peace-In-GAZA',
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
