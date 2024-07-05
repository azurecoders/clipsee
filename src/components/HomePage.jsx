// src/components/HomePage.jsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import flavour1 from "../assets/flavour1.jpg";
import flavour2 from "../assets/flavour2.jpg";
import flavour3 from "../assets/flavour3.jpg";
import flavour4 from "../assets/flavour4.jpg";
import flavour5 from "../assets/flavour5.jpg";
import flavour6 from "../assets/flavour6.jpg";
import flavour7 from "../assets/flavour7.jpg";
import flavour8 from "../assets/flavour8.jpg";
import flavour9 from "../assets/flavour9.jpg";
import flavour10 from "../assets/flavour10.jpg";
import flavour11 from "../assets/flavour11.jpg";
import flavour12 from "../assets/flavour12.jpg";

const sampleImages = [
  { name: "Ringo", image: flavour1 },
  { name: "Bar.B.Q", image: flavour2 },
  { name: "Tomato & Chilli", image: flavour3 },
  { name: "Chatpatta", image: flavour4 },
  { name: "Daal Chana", image: flavour5 },
  { name: "Mix Nimco", image: flavour6 },
  { name: "Daal Moth", image: flavour7 },
  { name: "Coconut Hearts", image: flavour8 },
  { name: "Mix Fruit Balls", image: flavour9 },
  { name: "Choco Biscuits", image: flavour10 },
  { name: "Dakar Balls", image: flavour11 },
  { name: "Chewing Balls", image: flavour12 },
];

const testimonialImages = [
  "https://picsum.photos/400/300?random=6",
  "https://picsum.photos/400/300?random=7",
  "https://picsum.photos/400/300?random=8",
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Clipsee
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover the deliciousness of our premium flavors
          </p>
          <a
            href="#flavors"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Flavors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleImages.map((flavour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {flavour.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialImages.map((img, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img
                  src={img}
                  alt={`Customer ${index + 1}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 mb-4">
                  {index === 0 &&
                    `"Salanty is amazing! The taste is so unique and delicious. My kids love it too. Highly recommend!"`}
                  {index === 1 &&
                    `"I tried the Bar.B.Q flavor and it was fantastic. It's tasty and also feels healthy. Great snack for everyone."`}
                  {index === 2 &&
                    `"The Mix Fruit Balls are my favorite. They are so tasty and perfect for a quick snack. Absolutely love Salanty!"`}
                </p>
                <h4 className="text-lg font-semibold">
                  {index === 0
                    ? "Ahmed Khan"
                    : index === 1
                    ? "Sara Ali"
                    : "Zainab Hussain"}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            We would love to hear from you. Reach out to us for any inquiries.
          </p>
          <Link
            to="/contact"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <FaFacebook className="text-2xl hover:text-white" />
            <FaTwitter className="text-2xl hover:text-white" />
            <FaInstagram className="text-2xl hover:text-white" />
          </div>
          <p>&copy; {new Date().getFullYear()} Salanty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
