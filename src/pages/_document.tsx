import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from '@/googleAnalytics';

export default function Document() {
  return (
    <Html lang="en">
      <GoogleAnalytics />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
