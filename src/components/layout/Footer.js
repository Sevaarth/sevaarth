import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import config from "@/lib/config";

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
    <footer className="bg-[#111827] pt-10 text-gray-300 text-xs font-bold body-font">
      <div className="container px-6 md:px-5 lg:px-20 py-8 mx-auto flex flex-col md:flex-row md:flex-nowrap md:mx-">
        {/* Logo and description */}
        <div className="w-full md:w-1/4   flex-shrink-0 text-center md:text-left mb-8 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-darkBlue">
            <Image
              className="w-20 rounded-full"
              src={logo}
              alt="Sevaarth Logo"
            />
          </a>
          <p className="mt-2 text-sm md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          {/* Social media icons */}
          <div className="flex mt-4 justify-center md:justify-start space-x-3 text-primary">
            <a
              href={config.socialLinks.facebook}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={config.socialLinks.instagram}
              target="_blank"
              className="ml-3"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={config.socialLinks.twitter}
              target="_blank"
              className="ml-3"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="w-full md:w-2/3 flex-grow flex flex-wrap justify-between text-center md:text-left">
          {footerLinks.map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <h2 className="title-font text-primary font-bold tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-1">
                    <a className="text-gray-300 hover:text-darkBlue" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}

          {/* Get in touch section */}
          <div className="w-full sm:w-1/2 lg:w-2/4 px-4">
            <h2 className="title-font text-primary font-bold tracking-widest text-sm mb-3">
              Get in touch
            </h2>
            <p className="text-gray-300 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-8 text-xs font-bold bg-opacity-50 rounded-full border-lightBlue focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="ml-2 bg-primary border-0 h-8 rounded-full text-gray-300 text-xs font-bold px-4 hover:bg-white hover:outline hover:text-primary transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t-2 border-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 text-lg font-semibold">
            © 2024 {config.appName}. All Rights Reserved.
          </p>
          <p className="text-gray-300 text-sm">
            Contact us: {config.contact.email} | {config.contact.phone}{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
