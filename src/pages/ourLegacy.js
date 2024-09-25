import Image from "next/image";
import Ashok_chakra from "/public/images/ashok chakra.png";

export default function OurLegacy() {
  return (
    <>
      <section>
        <div className=" pt-5 md:w-9/12 text-center md:text-end ">
          <i className=" md:text-8xl text-7xl  font-Italianno text-gray-400">
            sevaarth
          </i>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center pb-16  px-[13%]">
          <div className="container mx-auto  ">
            <h1 className="text-5xl text-center font-Playfair_Display md:text-start pl-[2%]">
              OUR STORY
            </h1>
            <p className="text-base md:text-xl text-gray-700 mt-4 md:mt-8 leading-relaxed">
              Sevaarth is a dedicated initiative that aims to provide essential
              support to elderly individuals within the community who are facing
              financial hardships. This project focuses on delivering basic
              household groceries and other necessary items to ensure that these
              seniors can maintain a decent standard of living. By addressing
              their immediate needs, Sevaarth seeks to enhance the quality of
              life for elderly individuals who may otherwise struggle to access
              these vital resources.
            </p>
          </div>
          <div className="w-1/2">
            <Image src={Ashok_chakra} alt="Ashok_chakra" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <h1 className="text-center text-6xl font-Italianno text-primary mb-12">
          Mission & Vision
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Section */}
          <article className="lg:w-4/5 mx-auto p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Sevaarth has a broader mission that goes beyond supporting elderly
              individuals with household needs. We are committed to empowering
              women, providing education to underprivileged children, and
              improving healthcare access for marginalized communities. Our goal
              is to make a lasting impact on the lives of community members
              while addressing urgent social issues.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              By working together with local leaders and dedicated volunteers,
              Sevaarth strives to bring positive change across various sectors
              including health, education, and social empowerment.
            </p>
            <div className="mt-6 text-center lg:text-left">
              <a
                href="#"
                className="text-primary font-semibold underline hover:text-blue-600 transition"
              >
                Learn more about our mission &gt;
              </a>
            </div>
          </article>

          {/* Vision Section */}
          <article className="lg:w-4/5 mx-auto p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-center text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              At Sevaarth, our vision is to create a society where every
              individual, regardless of their background, has access to
              opportunities that allow them to thrive. We envision a future
              where women are empowered, children are educated, and communities
              are healthy and self-sufficient.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our vision includes fostering a sustainable environment that
              nurtures growth and equality. By bridging the gap between
              marginalized groups and essential resources, we aim to create a
              world where social justice, inclusivity, and equal access are
              foundational principles.
            </p>
            <div className="mt-6 text-center lg:text-left">
              <a
                href="#"
                className="text-primary font-semibold underline hover:text-blue-600 transition"
              >
                Explore our vision &gt;
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
