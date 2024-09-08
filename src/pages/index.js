import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary">
            Building a Kinder Tomorrow, Today
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Empowering communities through care, education, and sustainability.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/join" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Join Us
            </Link>
            <Link href="/donate" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
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
              Sponsoring education to underprivileged children to break the cycle of poverty.
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
              Providing job training and resources to support financial independence.
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
              Organizing tree plantations and cleanliness drives for a sustainable future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
