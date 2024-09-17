import React from "react";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { toast, Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sevaarth</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="top-center" />
    </>
  );
}

export default MyApp;
