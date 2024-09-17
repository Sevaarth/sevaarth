import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  description: "सेवा का संकल्प, सेवार्थ के साथ।",
};

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="Sevaarth Description" content={metadata.description} />
        <link rel="icon" href="/logoSevaarth.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
};

export default Document;
