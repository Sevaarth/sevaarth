import Image from "next/image";
import React from "react";
import Image1 from "/public/images/20211107_161110.jpg";
import Image2 from "/public/images/20230108_123722.jpg";
import Link from "next/link";
//Icons import
import { FiFlag } from "react-icons/fi";
import { GiTargetShot } from "react-icons/gi";

const Template = () => {
  const handleImageError = (e) => {
    e.target.src = "/public/images/logoSevaarth.png"; // Fallback image in case of error
  };

  return (
    <section className="flex flex-col items-center md:flex-row p-8 ">
      {/* Image Section */}
      <div className="relative flex items-center justify-center h-screen ">
        <div className="flex flex-col md:flex-row">
          <div className=" hidden lg:block -ml-5  w-96 h-96 overflow-hidden bg-black z-40 border-8  border-white">
            <Image
              src={Image1}
              alt="Image 1"
              className="border-8  border-white"
            />
          </div>

          <div className="absolute top-[70%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#ebb011] to-[#ed861d] rounded-full  h-32 w-32 z-30"></div>

          <div className=" -ml-48 mt-32  w-96 h-96 overflow-hidden bg-black z-20 border-8  border-white">
            <Image
              src={Image2}
              alt="Image 2"
              className="border-8 border-white "
            />
          </div>
          <div className="absolute top-24 left-[63%] bg-gradient-to-b from-[#00af90] to-[#00715d] rounded-full h-32 w-32 z-0"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-orange-500 text-xl font-semibold">
          Welcome To Charius
        </h2>
        <h1 className="text-blue-900 text-6xl font-semibold mt-2">
          You're the Hope of Others.
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed w-[83%]">
          Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu
          neque sit etiam nec quisque. Cras quam dignissim blandit metus laoreet
          mi ut. Eget diam volutpat ultrices massa morbi sed nibh. Sodales diam
          eu etiam eu quam nisl viverra. Eget egestas orci felis nisl. Sit diam
          morbi amet viverra auctor nunc. Feugiat ac amet aliquet euismod ut
          vel. Mi lectus nisl augue commodo vitae nisi blandit. Venenatis netus
          suscipit tempus fringilla varius feugiat nulla proin.
        </p>

        {/* Mission and Vision Section */}
        <section className="flex justify-start space-x-12 mt-8 ">
          {/* Mission Section */}
          <div className="flex items-center space-x-4 ">
            <div className="flex justify-center items-center w-16 h-14 border-2 border-blue-300 rounded-full">
              <GiTargetShot className="text-blue-300 text-4xl" />
            </div>
            <div>
              <h2 className="text-[#1A1A46] text-xl font-bold">Our Mission</h2>
              <p className="text-gray-600 text-sm w-[80%]">
                We believe charity is a lifetime investment.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex items-center space-x-4 -translate-x-20">
            <div className="flex justify-center items-center w-16 h-14 border-2 border-orange-400 rounded-full">
              <FiFlag className="text-orange-400 text-4xl" />
            </div>
            <div>
              <h2 className="text-[#1A1A46] text-xl font-bold">Our Vision</h2>
              <p className="text-gray-600 text-sm w-[80%]">
                We believe charity is a lifetime investment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <Link
          href="/ourLegacy"
          className="mt-8 inline-block bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Template;
