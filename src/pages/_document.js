import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main className="flex-grow">
            <Main />
          </main>
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
