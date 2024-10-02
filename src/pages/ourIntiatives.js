import React from "react";
import Image from "next/image";
import logo from "/public/images/logoSevaarth.png"; // Ensure the path is correct

const Card = ({ imageSrc, imageAlt, title, description }) => {
  const [src, setSrc] = React.useState(imageSrc);

  const handleError = () => {
    setSrc(logo);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-600 rounded-lg shadow-lg p-4 md:p-6 items-center space-x-0 md:space-x-6 mb-4">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden mb-4 md:mb-0">
        <Image
          src={src}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-full"
          width={96}
          height={96}
          onError={handleError}
        />
      </div>
      <div className="text-white flex-1">
        <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const OurIntiatives = () => {
  const cards = [
    {
      imageSrc: "/images/elderly.jpg", // Correct path in the public folder
      imageAlt: "Elderly Care",
      title: "Supporting Elderly Individuals",
      description:
        "The primary focus of Sevaarth is to assist seniors who are experiencing financial difficulties. Many elderly individuals live on fixed incomes, which can make it challenging to afford basic necessities. By providing support, we aim to alleviate some of the financial burdens they face. Collecting donations: To fulfill our mission, we actively gather donations from community members, local businesses, and organizations. These contributions are crucial as they allow us to provide essential items that can significantly improve the lives of elderly individuals in need. In addition to groceries, we recognize the importance of providing other crucial items that contribute to a comfortable life. This may include personal hygiene products, cleaning supplies, and other necessities that help seniors maintain their dignity and well-being. Our ultimate goal is to enable elderly individuals to live with dignity and comfort. Team Sevaarth believes that everyone deserves to have their basic needs met, and we work tirelessly to ensure that seniors can enjoy a quality life without the constant worry of financial strain. Your little contribution can create a supportive environment that uplifts our elderly population.",
    },
    {
      imageSrc: "/images/education.jpg", // Correct path in the public folder
      imageAlt: "Child Education",
      title: "Underprivileged Child Education",
      description:
        "Education is a powerful tool that can help lift families out of poverty. By providing educational support to children, we aim to create opportunities for them to succeed and build a better future. Every child has unique talents and abilities. By investing in their education, we help them discover and develop these skills, enabling them to pursue their dreams and aspirations. By empowering them through education, we hope to inspire a new generation of leaders who will work towards creating a better world for everyone.",
    },
    {
      imageSrc: "/images/health.jpg", // Correct path in the public folder
      imageAlt: "Health Initiatives",
      title: "Health Sector Initiatives",
      description:
        "Committed to enhancing healthcare services and access for communities through innovative and sustainable health programs.",
    },
    {
      imageSrc: "/images/women.jpg", // Correct path in the public folder
      imageAlt: "Women Empowerment",
      title: "Women Empowerment",
      description:
        "Empowering women through education, skill development, and leadership opportunities.",
    },
    {
      imageSrc: "/images/plantation.jpg", // Correct path in the public folder
      imageAlt: "Plantation and Cleanliness",
      title: "Plantation and Cleanliness",
      description:
        "Promoting environmental sustainability through tree planting and cleanliness drives.",
    },
    {
      imageSrc: "/images/cloth.jpg", // Correct path in the public folder
      imageAlt: "Cloth Collection & Donation",
      title: "Cloth Collection & Donation",
      description:
        "Collecting and distributing clothes to those in need, fostering a spirit of giving and community support.",
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen py-10">
      <div className="flex items-center justify-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurIntiatives;
