import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from '@/googleAnalytics';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <GoogleAnalytics />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  );
}
