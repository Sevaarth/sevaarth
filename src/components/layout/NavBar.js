import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 shadow-lg sticky fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 ">
        <div className="flex">
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

        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            href={{
              pathname: "/about",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            About
          </Link>
          <Link
            href={{
              pathname: "/join",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Join Us
          </Link>
          <Link
            href={{
              pathname: "/donate",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
