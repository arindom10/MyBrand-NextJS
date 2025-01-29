import AboutPageLayout from "@/Layout/AboutPageLayout";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "AboutUs ",
    description: "This is About page",
  };
};

const page = () => {
  return (
    <AboutPageLayout>
      <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Welcome to our platform! We are dedicated to providing the best
            services with a focus on quality, reliability, and customer
            satisfaction. Our journey started with a passion for innovation and
            a commitment to excellence.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
            {[
              { name: "John Doe", role: "CEO", img: "/team1.jpg" },
              { name: "Jane Smith", role: "CTO", img: "/team2.jpg" },
              { name: "David Lee", role: "Lead Designer", img: "/team3.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-16 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Vision & Mission</h2>
          <p className="text-lg text-gray-300 mt-4">
            Our goal is to create impactful solutions that empower businesses
            and individuals. We aim to be industry leaders by constantly
            innovating and delivering high-quality services.
          </p>
        </div>
      </section>
    </AboutPageLayout>
  );
};

export default page;
