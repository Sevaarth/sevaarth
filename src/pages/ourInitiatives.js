import React, { useState } from "react";
import {
  Heart,
  Users,
  Share2,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import FallbackImage from "/public/images/20211107_161110.jpg";

const Card = ({ className, children }) => (
  <div className={`rounded-lg border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Create a local Button component
const Button = ({ className, children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${className}`}
  >
    {children}
  </span>
);

const InitiativeCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  category,
  impact,
  location,
  nextEvent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const [supportCount, setSupportCount] = useState(
    () => Math.floor(Math.random() * 100) + 50,
  );

  const handleError = () => {
    setImgSrc(FallbackImage);
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-xl overflow-hidden bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          width={400}
          height={200}
          onError={handleError}
          priority={true}
        />
        <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <h2 className="text-2xl font-bold text-emerald-800">{title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1 text-emerald-600 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1 text-emerald-600 flex-shrink-0" />
            <span>{impact}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div id={`description-${title.replace(/\s+/g, "-").toLowerCase()}`}>
          <p
            className={`text-gray-600 ${isExpanded ? "" : "line-clamp-3"} transition-all duration-300`}
          >
            {description}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`description-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp size={16} aria-hidden="true" />
            </>
          ) : (
            <>
              Read more <ChevronDown size={16} aria-hidden="true" />
            </>
          )}
        </button>

        {nextEvent && (
          <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
            <h3 className="font-semibold text-emerald-800 flex items-center">
              <Calendar
                size={16}
                className="mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              Upcoming Event
            </h3>
            <p className="text-sm text-emerald-600 mt-1">{nextEvent}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-2">
          <Button
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
            onClick={() => setSupportCount((prev) => prev + 1)}
            aria-label={`Support ${title}`}
          >
            <Heart size={16} className="mr-1 inline" aria-hidden="true" />
            Support ({supportCount})
          </Button>
          <Button
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
            aria-label={`Share ${title}`}
          >
            <Share2 size={16} className="mr-1 inline" aria-hidden="true" />
            Share
          </Button>
        </div>
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          aria-label={`Get involved with ${title}`}
        >
          Get Involved{" "}
          <ArrowRight size={16} className="ml-1 inline" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const OurInitiatives = () => {
  const cards = [
    {
      imageSrc: "/images/elderly.jpg",
      imageAlt: "Elderly Care",
      title: "Supporting Elderly Individuals",
      category: "Elder Care",
      impact: "500+ Seniors Helped",
      location: "Multiple Locations",
      nextEvent: "Monthly Wellness Check - Every First Sunday",
      description:
        "The primary focus of Sevaarth is to assist seniors who are experiencing financial difficulties. Many elderly individuals live on fixed incomes, which can make it challenging to afford basic necessities. By providing support, we aim to alleviate some of the financial burdens they face.",
    },
    {
      imageSrc: "/images/education.jpg",
      imageAlt: "Child Education",
      title: "Underprivileged Child Education",
      category: "Education",
      impact: "1000+ Children Educated",
      location: "Urban & Rural Areas",
      nextEvent: "Back-to-School Supply Drive - August 15",
      description:
        "Education is a powerful tool that can help lift families out of poverty. By providing educational support to children, we aim to create opportunities for them to succeed and build a better future. Every child has unique talents and abilities.",
    },
    {
      imageSrc: "/images/cloth.jpg",
      imageAlt: "Cloth Collection & Donation",
      title: "Cloth Collection & Donation",
      category: "Basic Needs",
      impact: "5000+ People Clothed",
      location: "Donation Centers",
      nextEvent: "Winter Clothing Drive - Starting Soon",
      description:
        "Collecting and distributing clothes to those in need, fostering a spirit of giving and community support. We ensure dignity and respect in our distribution process while meeting the essential clothing needs of vulnerable populations.",
    },
    {
      imageSrc: "/images/health.jpg",
      imageAlt: "Health Initiatives",
      title: "Health Sector Initiatives",
      category: "Healthcare",
      impact: "2000+ Patients Served",
      location: "Nationwide",
      nextEvent: "Free Medical Camp - Every Month",
      description:
        "Committed to enhancing healthcare services and access for communities through innovative and sustainable health programs. We focus on preventive care, health education, and improving access to quality medical services.",
    },
    {
      imageSrc: "/images/women.jpg",
      imageAlt: "Women Empowerment",
      title: "Women Empowerment",
      category: "Gender Equality",
      impact: "750+ Women Empowered",
      location: "Community Centers",
      nextEvent: "Skill Development Workshop - Weekends",
      description:
        "Empowering women through education, skill development, and leadership opportunities. Our programs focus on financial literacy, entrepreneurship training, and creating safe spaces for women to grow and thrive in their communities.",
    },
    {
      imageSrc: "/images/plantation.jpg",
      imageAlt: "Plantation and Cleanliness",
      title: "Green Earth Initiative",
      category: "Environment",
      impact: "10000+ Trees Planted",
      location: "Various Cities",
      nextEvent: "Community Cleanup Drive - This Sunday",
      description:
        "Promoting environmental sustainability through tree planting and cleanliness drives. We organize regular community events to plant trees, maintain public spaces, and raise awareness about environmental conservation.",
    },
  ];

  return (
    <section className="bg-emerald-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Our Initiatives
          </h1>
          <p className=" text-lg max-w-2xl mx-auto">
            Join us in making a difference. Every action counts, every life
            matters.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <InitiativeCard key={`initiative-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInitiatives;
