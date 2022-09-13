import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Weather</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Simple Weather App Made with NextJS"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://weather-app-beta-livid.vercel.app/"
        />
        <meta property="og:title" content="Next Weather" />
        <meta
          property="og:description"
          content="Simple Weather App Made with NextJS"
        />
        <meta property="og:image" content="background.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://weather-app-beta-livid.vercel.app/"
        />
        <meta property="twitter:title" content="Next Weather" />
        <meta
          property="twitter:description"
          content="Simple Weather App Made with NextJS"
        />
        <meta property="twitter:image" content="background.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
