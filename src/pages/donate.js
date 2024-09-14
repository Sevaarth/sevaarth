export default function Donate() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-5xl font-bold text-primary text-center">Donate</h1>
      <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center">
        Your donation helps us continue our work of supporting elderly
        individuals, educating children, and empowering women.
      </p>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}
