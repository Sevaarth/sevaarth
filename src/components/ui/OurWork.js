import Image from "next/image";

const OurWork = () => {
  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/elderly.jpg"
            alt="Elderly Support"
            width={400}
            height={250}
            className="rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">Elderly Support</h3>
          <p className="mt-2 text-gray-600">
            We provide essential groceries and care for seniors in need.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/education.jpg"
            alt="Child Education"
            width={400}
            height={250}
            className="rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">Child Education</h3>
          <p className="mt-2 text-gray-600">
            Sponsoring education to underprivileged children to break the cycle
            of poverty.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/women.jpg"
            alt="Women Empowerment"
            width={400}
            height={250}
            className="rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">Women Empowerment</h3>
          <p className="mt-2 text-gray-600">
            Providing job training and resources to support financial
            independence.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src="/environment.jpg"
            alt="Environment Initiatives"
            width={400}
            height={250}
            className="rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">Environment Initiatives</h3>
          <p className="mt-2 text-gray-600">
            Organizing tree plantations and cleanliness drives for a sustainable
            future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
