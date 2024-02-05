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
        <script
          dangerouslySetInnerHTML={{
            __html: `

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3832175,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
          }}
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
