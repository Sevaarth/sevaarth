import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#0B8494] via-[#125B9A] to-[#507687] w-full z-10 top-0">
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

        <div className="flex space-x-6 font-bold ">
          <Link
            href="/"
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            href={{
              pathname: "/ourLegacy",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Our Legacy
          </Link>
          <Link
            href={{
              pathname: "/ourIntiatives",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Our Intiatives
          </Link>

          <Link
            href={{
              pathname: "/getInvolved",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Get Involved
          </Link>
          <Link
            href={{
              pathname: "/contactUs",
            }}
            className="text-white hover:bg-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
