import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Your App Description" />
        <link rel="icon" href="/netflix.png" />
        <meta property="og:title" content="Your App Title" />
        <meta property="og:description" content="Your App Description" />
        <meta property="og:image" content="/netflix.png" />
        <meta property="og:url" content="https://netfilx-project.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Netflix" />
        <meta name="twitter:description" content="Netflix project" />
        <meta name="twitter:image" content="/netflix.png" />
      </Head>
      <div className="full-page-background">
        <Component {...pageProps} />
      </div>
    </>
  );
}
