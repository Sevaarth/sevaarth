import Image from "next/image";
import React from "react";

const trail = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-rose-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 font-Playfair_Display">
                Empowering Lives
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join Sevaarth in our mission to support the elderly and create
                lasting positive change in our community.
              </p>
              <div className="space-x-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
                  Donate Now
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Volunteer
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <Image
                  src={FallbackImage}
                  alt="Elderly support"
                  className="rounded-full object-cover shadow-2xl"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-Italianno text-orange-500">
                    sevaarth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default trail;
