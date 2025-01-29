import HomeLayout from "@/Layout/HomeLayout";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact",
    description: "This is Contact page",
  };
};

const ContactPage = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? Feel free to reach out to us.
            We're here to help!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Our Contact Details</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Reach us through the following:
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-lg">
              📍 <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p className="text-lg">
              📧 <strong>Email:</strong> contact@yourwebsite.com
            </p>
            <p className="text-lg">
              📞 <strong>Phone:</strong> +1 234 567 890
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactPage;
