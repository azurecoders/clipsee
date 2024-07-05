import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "Salanty's flavors are absolutely amazing. I've never tasted
              anything like it!"
            </p>
            <p className="font-bold">- Customer 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "A delightful experience from start to finish. Highly recommend!"
            </p>
            <p className="font-bold">- Customer 2</p>
          </div>
          {/* Repeat for other testimonials */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
