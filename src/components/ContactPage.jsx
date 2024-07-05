import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl mb-8">
            We'd love to hear from you! Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Contact Information
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0">
            <div className="text-center">
              <FaMapMarkerAlt className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                B508 2nd Floor Opt Younus Masjid Ahsanabad
              </p>
            </div>
            <div className="text-center">
              <FaPhoneAlt className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+92 3268928939</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">clipseefoodsbeverages@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Send Us a Message
          </h2>
          <form
            action="https://formspree.io/f/xvgpovpp"
            method="POST"
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Clipsee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
