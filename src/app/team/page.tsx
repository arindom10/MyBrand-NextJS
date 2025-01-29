import AboutPageLayout from "@/Layout/AboutPageLayout";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Our Team ",
    description: "This is Our Team page",
  };
};

const TeamPage = () => {
  return (
    <AboutPageLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our team is our strength. We bring a variety of skills, experience,
            and passion to everything we do.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "John Doe",
              role: "CEO",
              img: "/team1.jpg",
              bio: "John is a visionary leader, shaping the future of the company with his strategic decisions.",
            },
            {
              name: "Jane Smith",
              role: "CTO",
              img: "/team2.jpg",
              bio: "Jane drives innovation, ensuring our tech stack is always ahead of the curve.",
            },
            {
              name: "David Lee",
              role: "Lead Designer",
              img: "/team3.jpg",
              bio: "David’s design philosophy focuses on user-centric and visually appealing experiences.",
            },
            {
              name: "Emma Watson",
              role: "Marketing Manager",
              img: "/team4.jpg",
              bio: "Emma leads our marketing efforts, creating campaigns that resonate with our audience.",
            },
            {
              name: "Michael Brown",
              role: "Operations Head",
              img: "/team5.jpg",
              bio: "Michael ensures our operations run smoothly, optimizing efficiency and productivity.",
            },
            {
              name: "Sarah Lee",
              role: "HR Manager",
              img: "/team6.jpg",
              bio: "Sarah fosters a positive work culture and takes care of our most important asset—our people.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-lg text-gray-400 dark:text-gray-300">
                {member.role}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AboutPageLayout>
  );
};

export default TeamPage;
