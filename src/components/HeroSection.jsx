import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-20" id="home">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Salanty</h1>
        <p className="text-xl mb-8">
          Experience the exquisite taste of our unique flavors.
        </p>
        <a
          href="#flavors"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Explore Flavors
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
