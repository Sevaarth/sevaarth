import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
};

export default Document;
