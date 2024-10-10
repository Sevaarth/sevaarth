import Image from "next/image";
import React from "react";
import FallbackImage from "/public/images/logoSevaarth.png";
import { motion } from "framer-motion";

const trail = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-rose-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 mt-10 md:mt-0">
              {/* Animated Text */}
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 font-Playfair_Display"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Empowering Lives
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join Sevaarth in our mission to support the elderly and create
                lasting positive change in our community.
              </motion.p>
              <div className="space-x-4">
                <motion.button
                  className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Donate Now
                </motion.button>
                {/* <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Volunteer
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src={FallbackImage}
                    alt="Elderly support"
                    className="rounded-full object-cover shadow-2xl"
                    width={400}
                    height={400}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default trail;
