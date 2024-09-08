export default function About() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-5xl font-bold text-primary text-center">About Us</h1>
      <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center">
        Sevaarth is a nonprofit initiative that focuses on improving the lives of the elderly, underprivileged children, and women in need. Our mission is to create a better world through community care and sustainability.
      </p>

      <section className="py-12">
        <h2 className="text-4xl font-bold text-center">Our Mission</h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          We aim to provide care and support to the most vulnerable members of society, enabling them to live with dignity and purpose.
        </p>

        <h2 className="text-4xl font-bold text-center mt-12">Our Vision</h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          A world where everyone has access to the resources and support they need to thrive, regardless of their circumstances.
        </p>
      </section>
    </div>
  );
}
