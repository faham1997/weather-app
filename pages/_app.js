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
        <meta itemProp="image" content="/background.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
