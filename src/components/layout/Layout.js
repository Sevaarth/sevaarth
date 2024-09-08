import Head from 'next/head';
import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import logo from "/public/images/logoSevaarth.png";


export const metadata = {
  title: "Sevaarth",
  description: "सेवा का संकल्प, सेवार्थ के साथ।",
};

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="Sevaarth Description" content={metadata.description}/>
        <link rel="icon" href={logo}/> 
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
