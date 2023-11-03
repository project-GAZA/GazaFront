import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: '가자지구의 피난민들에게 응원을 전해주세요',
  description: 'cheering for GAZA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head></head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
