import './globals.css';
import { ChakraProvider, ToastProvider } from '@chakra-ui/react';

export const metadata = {
  title: '가자지구의 피난민들에게 응원을 전해주세요',
  description: 'cheering for GAZA',
  httpEquiv: 'Content-Security-Policy',
  content: 'upgrade-insecure-requests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
