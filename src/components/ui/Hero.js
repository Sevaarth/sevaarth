import { useState } from "react";
import logo from "/public/images/logoSevaarth.png"; // Fallback image

const Hero = () => {
  // State for handling image load errors
  const [mainImageError, setMainImageError] = useState(false);
  const [smallImageError, setSmallImageError] = useState(false);
  const [campaignImageError, setCampaignImageError] = useState(false);
  const [volunteersImageError, setVolunteersImageError] = useState(false);

  return (
    <div className="py-16 px-6 lg:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-[#0B8494] text-2xl font-semibold mb-4 animate-pulse">
            Give them a chance.
          </p>
          <h1 className="text-[#125B9A] font-bold text-4xl md:text-5xl leading-snug mb-6 tracking-tight">
            Believe in The Better Future of Others.
          </h1>
          <p className="text-[#507687] text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus
            tellus dui gravida. Sed at a massa nunc at.
          </p>
        </div>

        {/* Right Side: Image Collage */}
        <div className="lg:w-1/2 flex lg:justify-end relative">
          {/* Large Circular Image */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src={
                mainImageError
                  ? logo
                  : "https://charius-next.netlify.app/_ipx/w_750,q_75/%2F_next%2Fstatic%2Fmedia%2F1.368f2f55.jpg?url=%2F_next%2Fstatic%2Fmedia%2F1.368f2f55.jpg&w=750&q=75"
              }
              alt="Child image"
              className="object-cover w-full h-full"
              onError={() => setMainImageError(true)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-500 ease-in-out"></div>
          </div>

          {/* Smaller Circular Image */}
          <div className="absolute border-8 border-white -top-10 left-[15%] w-36 h-36 md:w-42 md:h-42 rounded-full overflow-hidden">
            <img
              src={
                smallImageError
                  ? logo
                  : "https://charius-next.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2F2.a97ffdb7.jpg?url=%2F_next%2Fstatic%2Fmedia%2F2.a97ffdb7.jpg&w=640&q=75"
              }
              alt="Another child image"
              className="object-cover w-full h-full"
              onError={() => setSmallImageError(true)}
            />
          </div>
        </div>
      </div>

      {/* Lower Section: Campaign and Volunteers */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 -mt-20 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Campaign Card */}
        <div className="bg-white p-6 lg:p-8 shadow-lg rounded-lg flex items-start max-w-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="mr-6 w-28 lg:w-32 h-28 lg:h-32 overflow-hidden rounded-md">
            <img
              src={
                campaignImageError
                  ? logo
                  : "https://enlightio.com/wp-content/uploads/2022/04/reasons-why-charity-is-important.jpg"
              }
              alt="Campaign"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out"
              onError={() => setCampaignImageError(true)}
            />
          </div>
          <div>
            <h3 className="text-[#125B9A] font-bold text-2xl mb-3">
              Join Our Upcoming Campaign
            </h3>
            <p className="text-[#507687] mb-4">
              Make an impact, one piece of clothing at a time, for those in
              need.
            </p>
            
          </div>
        </div>

        {/* Volunteer Stats */}
        <div className="bg-white p-6 lg:p-8 shadow-lg rounded-lg flex items-center max-w-sm hover:shadow-2xl -translate-y-24">
          <div className="flex flex-col items-center">
            <div className="bg-[#0B8494] text-white text-3xl lg:text-4xl font-bold rounded-full w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-lg">
              120+
            </div>
            <p className="text-[#125B9A] mt-3 text-center text-lg lg:text-xl font-semibold">
              Happy Volunteers
            </p>
          </div>
          <div className="flex -space-x-3 ml-6">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
                src={
                  volunteersImageError
                    ? logo
                    : "https://enlightio.com/wp-content/uploads/2022/04/reasons-why-charity-is-important.jpg"
                }
                alt="Volunteer"
                onError={() => setVolunteersImageError(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};ss

export default Hero;
