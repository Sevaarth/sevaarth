import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-secondary h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">
          Building a Kinder Tomorrow, Today
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Empowering communities through care, education, and sustainability.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            href={{
              pathname: "/join",
            }}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Join Us
          </Link>
          <Link
            href={{
              pathname: "/donate",
            }}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
