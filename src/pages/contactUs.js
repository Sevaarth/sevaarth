import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="bg-beige min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brown text-center mb-8">
            Contact Us
          </h1>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brown mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-brown mb-6">
              We’d love to hear from you! Whether you have questions, feedback,
              or need support, feel free to reach out to us using the contact
              form below or through the contact details provided.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-brown mb-4">
                  Contact Form
                </h3>
                <form className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-brown mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-brown mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-brown mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-brown mb-4">
                  Contact Details
                </h3>
                <p className="text-lg text-brown mb-4">
                  <strong>Address:</strong> 1234 Elm Street, Suite 567,
                  Cityville, ST 12345
                </p>
                <p className="text-lg text-brown mb-4">
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <p className="text-lg text-brown">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@sevaarth.org"
                    className="text-orange-500 hover:underline"
                  >
                    info@sevaarth.org
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
