import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: ["About Us", "Restaurant", "Contact", "Company"],
    },
    {
      title: "Company",
      links: ["Partnership", "Terms of Use", "Privacy", "Sitemap"],
    },
  ];

  return (
    <footer className=" bg-[#111827]  pt-10 text-gray-300 text-xs font-bold body-font">
      <div className="container px-[10%]  py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        {/* Logo and description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="-mt-8 flex title-font font-medium items-center md:justify-start justify-center text-darkBlue">
            <Image
              className="w-20 rounded-full"
              src={logo}
              alt="Sevaarth Logo"
            />
          </a>
          <p className="mt-2 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          {/* Social media icons */}
          <div className="flex mt-4 justify-center md:justify-start text-primary">
            <a href="#">
              <FaFacebookF />
            </a>
            <a className="ml-3" href="#">
              <FaInstagram />
            </a>
            <a className="ml-3" href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        {/* Footer links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-primary font-bold tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none mb-10">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a className="text-gray-300 hover:text-darkBlue" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
          {/* Get in touch section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-primary font-bold tracking-widest text-sm mb-3">
              Get in touch
            </h2>
            <p className="text-gray-300 ml-24 md:-ml-1 pl-2 w-[20vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex mt-4 lg:w-[20vw]">
              <input
                type="text"
                placeholder="Email"
                className="w-2/3 h-8  text-xs font-bold bg-opacity-50 rounded-full border-lightBlue focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="ml-2 bg-primary border-0 h-8 focus:outline-none rounded-full text-gray-300 text-xs font-bold px-4 hover:bg-white hover:outline hover:text-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="border-t-2 border-gray-400 py-4">
        <div className="container mx-auto text-center ">
          <p className="text-gray-300 text-lg font-semibold">
            © 2024 Sevaarth. All Rights Reserved.
          </p>
          <p className="text-gray-300 text-sm">
            Contact us: info@sevaarth.org | +123 456 7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
