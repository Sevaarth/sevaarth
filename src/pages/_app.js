import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import logo from "/public/images/logoSevaarth.png";

export const metadata = {
  title: "Sevaarth",
  description: "सेवा का संकल्प, सेवार्थ के साथ।",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="Sevaarth Description" content={metadata.description} />
        <link rel="icon" href={logo} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
