import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/libs/gtag';

const GA_TRACKING_ID = 'G-58LZ0H6Y0L';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
        <title>Netflix-Squid-Game-Trip</title>
        <meta name="description" content="Netflix-Squid-Game-Trip" />
        <link rel="icon" href="/netflix.png" />
        <meta property="og:title" content="Netflix-Squid-Game-Trip" />
        <meta property="og:description" content="Netflix-Squid-Game-Trip" />
        <meta property="og:image" content="/netflix.png" />
        <meta property="og:url" content="https://netfilx-project.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Netflix-Squid-Game-Trip" />
        <meta name="twitter:description" content="Netflix-Squid-Game-Trip" />
        <meta name="twitter:image" content="/netflix.png" />
      </Head>      
      <div className="full-page-background">
        <Component {...pageProps} />
      </div>
    </>
  );
}
