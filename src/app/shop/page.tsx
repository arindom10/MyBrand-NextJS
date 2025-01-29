import React from "react";
import Link from "next/link";
import HomeLayout from "@/Layout/HomeLayout";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Shop ",
    description: "This is Shop page",
  };
};

const ShopPage = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Shop Our IT Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our wide range of IT solutions and products. Enhance your
            business efficiency with our tools.
          </p>
        </div>

        {/* Product List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Cloud Hosting Package",
              price: "$199",
              description:
                "Get your website up and running with our scalable, secure, and fast cloud hosting package.",
              image: "/cloud-hosting.jpg",
              link: "/shop/cloud-hosting",
            },
            {
              name: "Cybersecurity Suite",
              price: "$299",
              description:
                "Protect your business with our comprehensive cybersecurity suite, designed to mitigate online threats.",
              image: "/cybersecurity-suite.jpg",
              link: "/shop/cybersecurity-suite",
            },
            {
              name: "Website Development Package",
              price: "$399",
              description:
                "Our website development package includes everything from design to deployment, tailored to your needs.",
              image: "/website-development.jpg",
              link: "/shop/website-development",
            },
            {
              name: "Mobile App Development",
              price: "$499",
              description:
                "Build a custom mobile app to engage your customers with seamless, intuitive mobile experiences.",
              image: "/mobile-app.jpg",
              link: "/shop/mobile-app",
            },
            {
              name: "IT Consultation",
              price: "$249",
              description:
                "Get expert consultation on IT strategy, management, and scaling your infrastructure for growth.",
              image: "/it-consultation.jpg",
              link: "/shop/it-consultation",
            },
            {
              name: "Business Automation Tool",
              price: "$349",
              description:
                "Automate key business processes and increase operational efficiency with our automation tool.",
              image: "/business-automation.jpg",
              link: "/shop/business-automation",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">{product.price}</span>
                <Link href={product.link}></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ShopPage;
