import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Salanty, we are committed to bringing you the best tasting,
            highest quality products. Our unique flavors are crafted with care
            and precision to ensure an unforgettable experience.
          </p>
          <p className="text-lg text-gray-700">
            Join us on a journey of taste and discover what makes Salanty
            special.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://source.unsplash.com/random/600x400?about"
            alt="About Us"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
