import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have any questions or want to know more about Salanty? Reach out to
          us!
        </p>
        <a
          href="mailto:contact@salanty.com"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
