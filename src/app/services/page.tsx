import HomeLayout from "@/Layout/HomeLayout";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Services ",
    description: "This is Service page",
  };
};

const Services = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our IT Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide innovative and effective IT solutions that drive success
            and help your business grow.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              description:
                "We build high-performance, scalable, and secure web applications tailored to your business needs.",
              icon: "🌐",
            },
            {
              title: "Cloud Solutions",
              description:
                "We offer secure cloud solutions for data storage, hosting, and scalability, ensuring your business stays connected.",
              icon: "☁️",
            },
            {
              title: "Cybersecurity",
              description:
                "Our cybersecurity services protect your business from online threats with comprehensive security measures.",
              icon: "🔒",
            },
            {
              title: "IT Consulting",
              description:
                "Get expert advice on IT infrastructure, strategy, and management to help your business stay ahead in a competitive market.",
              icon: "💼",
            },
            {
              title: "Mobile App Development",
              description:
                "We create user-friendly and feature-rich mobile applications that enhance user experience and business operations.",
              icon: "📱",
            },
            {
              title: "Managed IT Services",
              description:
                "We provide ongoing support, monitoring, and management of your IT systems to ensure smooth business operations.",
              icon: "🖥️",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Contact us today to learn how our IT services can help you achieve
            your goals and stay competitive.
          </p>
          <a href="/contact">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Services;
