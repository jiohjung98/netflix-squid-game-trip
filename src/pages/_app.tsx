import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix Project</title>
        <meta name="description" content="A project demonstrating Next.js and React." />
        <link rel="icon" href="/netflix.png" />
        <meta property="og:title" content="Netflix Project" />
        <meta property="og:description" content="A project demonstrating Next.js and React." />
        <meta property="og:image" content="/netflix.png" />
        <meta property="og:url" content="https://netfilx-project.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Netflix Project" />
        <meta name="twitter:description" content="A project demonstrating Next.js and React." />
        <meta name="twitter:image" content="/netflix.png" />
      </Head>
      <div className="full-page-background">
        <Component {...pageProps} />
      </div>
    </>
  );
}
