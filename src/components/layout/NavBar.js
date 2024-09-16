import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#0B8494] via-[#125B9A] to-[#507687] w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center md:px-0 lg:px-6 px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image
              src={logo}
              alt="Sevaarth Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex space-x-6 font-bold ">
          <Link
            href="/"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/ourLegacy"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Our Legacy
          </Link>
          <Link
            href="/ourIntiatives"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Our Initiatives
          </Link>
          <Link
            href="/getInvolved"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Get Involved
          </Link>
          <Link
            href="/contactUs"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ">
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
          <div className="md:hidden absolute top-16 right-0  bg-[#1b5c96] flex flex-col items-center py-4 space-y-4  rounded-xs">
            <Link
              href="/"
              className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg  "
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/ourLegacy"
              className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={toggleMenu}
            >
              Our Legacy
            </Link>
            <Link
              href="/ourIntiatives"
              className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={toggleMenu}
            >
              Our Initiatives
            </Link>
            <Link
              href="/getInvolved"
              className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={toggleMenu}
            >
              Get Involved
            </Link>
            <Link
              href="/contactUs"
              className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
