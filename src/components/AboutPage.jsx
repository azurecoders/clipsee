import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import owner from "../assets/owner.jpg";
import hussnain from "../assets/hussnain.jpg";
import zohaib from "../assets/zohaib.jpg";
import sampleImage1 from "../assets/plant.jpg";
import sampleImage2 from "../assets/production.jpg";
import sampleImage3 from "../assets/cotton.jpg";
import { Link } from "react-router-dom";

const employeeData = [
  {
    name: "Muhammed Hussain",
    position: "Chief Financial Analyst (CFA)",
    image: hussnain,
  },

  {
    name: "Muhammed Zohaib",
    position: "GM (Production/Sales)",
    image: zohaib,
  }
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Clipsee</h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover our journey, values, and the remarkable people behind
            Clipsee.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src={sampleImage1}
                alt="Company Overview 1"
                className="w-full h-[300px] mb-8 object-cover object-center rounded-lg shadow-lg"
              />
              <p className="text-lg mb-8">
                Clipsee is a leading company in the industry, dedicated to
                providing top-notch products and services.
              </p>
            </div>
            <div>
              <img
                src={sampleImage2}
                alt="Company Overview 2"
                className="w-full h-[300px] mb-8 object-cover object-center rounded-lg shadow-lg"
              />
              <p className="text-lg mb-8">
                Our commitment to innovation, quality, and customer satisfaction
                sets us apart.
              </p>
            </div>
            <div>
              <img
                src={sampleImage3}
                alt="Company Overview 3"
                className="w-full h-[300px] mb-8 object-cover object-center rounded-lg shadow-lg"
              />
              <p className="text-lg mb-8">
                We continuously strive to improve and innovate, ensuring our
                customers receive the best products and services.
              </p>
            </div>
          </div>
          <div className="text-center mb-8">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <p className="text-lg">Trademark Registered</p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Owner</h2>
          <img
            src={owner}
            alt="Sajid Rashid Khan"
            className="w-40 h-40 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Sajid Rashid Khan</h3>
          <p className="text-lg mb-8">
            Sajid Rashid Khan, the visionary behind Clipsee, has led the company
            with passion and dedication, steering it towards unparalleled
            success in the industry.
          </p>
        </div>
      </section>

      {/* Remarkable Employees Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Remarkable Employees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employeeData.map((employee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-2xl font-semibold mb-2">{employee.name}</h3>
                <p className="text-gray-700">{employee.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 flex justify-center items-center space-x-4 opacity-5">
          <div className="bg-indigo-100 w-1/4 h-64 rounded-lg transform rotate-6"></div>
          <div className="bg-indigo-200 w-1/4 h-64 rounded-lg transform -rotate-6"></div>
          <div className="bg-indigo-300 w-1/4 h-64 rounded-lg transform rotate-6"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-lg">
                We constantly strive to innovate and improve our products and
                services to meet the evolving needs of our customers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-lg">
                Our commitment to quality ensures that we deliver the best
                products and services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-lg">
                We prioritize customer satisfaction and work tirelessly to meet
                and exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <p className="text-lg mb-8">
            Have any questions or concerns? We're always ready to help!
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700"
          >
            Get in Touch
          </Link>
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

export default AboutPage;
