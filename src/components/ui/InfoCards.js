import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fallbackImage from "/public/images/logoSevaarth.png"; // Fallback image

// Custom Hook for Image Error Handling
const useImageError = (initialImgSrc) => {
  const [imgSrc, setImgSrc] = useState(initialImgSrc);

  const handleError = () => setImgSrc(fallbackImage);

  return [imgSrc, handleError];
};

// Reusable Card Component
const Card = ({ imgSrc, title, description, link }) => {
  const [imageSrc, handleImageError] = useImageError(imgSrc);
  const router = useRouter(); // Initialize useRouter

  const handleClick = () => {
    router.push(link); // Navigate to the specified link
  };

  return (
    <div className="text-center flex flex-col items-center max-w-sm">
      <div className="mb-6">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="rounded-full object-cover transition-opacity duration-500 hover:opacity-90"
          onError={handleImageError}
        />
      </div>
      <h3 className="text-3xl font-extrabold text-white mb-3">{title}</h3>
      <p className="text-base text-gray-200 mb-8 px-4">{description}</p>
      <button
        onClick={handleClick}
        className="bg-orange-500 text-white font-semibold tracking-wide px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
      >
        Click here
      </button>
    </div>
  );
};

// Main InfoCards Component with Slideshow and Enhanced UX/UI
export default function InfoCards() {
  const cardsData = [
    {
      imgSrc: "/images/volunteer.png", // Replace with your image path
      title: "Become a Volunteer",
      description:
        "Join hands to help us achieve more. Alone, I can do little. Together, we can do anything.",
      link: "/getInvolved#volunteer", // Add link for volunteer section
      backgroundImage: "/images/bg-volunteer.jpg", // Replace with your background image
    },
    {
      imgSrc: "/images/donate.png", // Replace with your image path
      title: "Start Donating",
      description:
        "Your contribution, no matter the size, can make a big difference in the world.",
      link: "/getInvolved#donate", // Add link for donate section
      backgroundImage: "/images/bg-donate.jpg", // Replace with your background image
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Slideshow effect, cycling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [cardsData.length]);

  const activeCard = cardsData[activeIndex];

  return (
    <div
      className="relative flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${activeCard.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-black opacity-70"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Page Title */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
          Join Us in Making a Difference
        </h2>

        {/* Card Content */}
        <div className="flex justify-center">
          <Card
            key={activeIndex}
            imgSrc={activeCard.imgSrc}
            title={activeCard.title}
            description={activeCard.description}
            link={activeCard.link}
          />
        </div>
      </div>
    </div>
  );
}
