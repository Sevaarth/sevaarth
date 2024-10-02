import config from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track the active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className="bg-[#063150] w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center md:px-0 lg:px-6 px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image
              src={config.logo}
              alt="Sevaarth Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex space-x-6 font-bold">
          {[
            "/",
            "/ourLegacy",
            "/ourIntiatives",
            "/getInvolved",
            "/contactUs",
          ].map((link) => (
            <Link
              key={link}
              href={link}
              className={`px-4 py-2 rounded-lg transition duration-300 ${
                activeLink === link
                  ? "text-green-300"
                  : "text-white hover:bg-gray-800 hover:text-gray-200"
              }`}
              onClick={() => handleLinkClick(link)} // Handle link click
            >
              {link === "/"
                ? "Home"
                : link
                    .replace("/", "")
                    .replace(/([A-Z])/g, " $1")
                    .trim()}{" "}
              {/* Formatting the link names */}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-[#1b5c96] flex flex-col items-center py-4 space-y-4 rounded-xs">
            {[
              "/",
              "/ourLegacy",
              "/ourIntiatives",
              "/getInvolved",
              "/contactUs",
            ].map((link) => (
              <Link
                key={link}
                href={link}
                className={`text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg ${
                  activeLink === link ? "text-green-300" : ""
                }`}
                onClick={() => handleLinkClick(link)} // Handle link click
              >
                {link === "/"
                  ? "Home"
                  : link
                      .replace("/", "")
                      .replace(/([A-Z])/g, " $1")
                      .trim()}{" "}
                {/* Formatting the link names */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
