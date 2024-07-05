import React from "react";

const FlavorsSection = () => {
  return (
    <section id="flavors" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Flavors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Add flavor cards here */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://source.unsplash.com/random/300x200?flavor1"
              alt="Flavor 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Flavor 1</h3>
            <p className="text-gray-700">Description of flavor 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://source.unsplash.com/random/300x200?flavor2"
              alt="Flavor 2"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Flavor 2</h3>
            <p className="text-gray-700">Description of flavor 2.</p>
          </div>
          {/* Repeat for other flavors */}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
