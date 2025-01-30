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
              name: "Arindom Kundu",
              role: "CEO",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t51.75761-15/464366463_18331011652148619_7496386573159741193_n.jpg?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEpn1IcqYiWLWShSzn-A4HW1LhI7ym38kHUuEjvKbfyQZSAdauGkJT_ENKUONnneQJu3deSM_GtZbANT8FfmNEw&_nc_ohc=hmgsaw62FNsQ7kNvgE82kgD&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=A5r7GRNqZ2q95I98w2dVPxc&oh=00_AYAbGGGslBYzxJaSCMTmpYZgeaMW0-yShDTKskiKLsgWCw&oe=67A0E83E",
              bio: "John is a visionary leader, shaping the future of the company with his strategic decisions.",
            },
            {
              name: "Hasibur Rahman",
              role: "CTO",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/474204736_2227870450940282_2521337680964295355_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEbNNGfFyDX-JaL8bBXLkL58ixPexfF-iryLE97F8X6KgtJ35_pSaXujQlRajyGij7Zvsxtw1eFO8PUyleZF_DZ&_nc_ohc=cmZYdyxJeTAQ7kNvgElDK3G&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AImGmLvKW4JGOpcDSppcwHW&oh=00_AYBJEViBpGJoGDbl6bydoz5AFTrTuepycbKVg_8xqc5g3g&oe=67A0D64A",
              bio: "Jane drives innovation, ensuring our tech stack is always ahead of the curve.",
            },
            {
              name: "Tanzim Ahmed",
              role: "Lead Designer",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/361623600_3464357397208791_8352590462810908965_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjA12YBTczlMbo6KFC4nTmvX4hebsJtUy9fiF5uwm1TGkaJZZLDlPfFYgvvgY3b1NZtXKBcHtuo7GZe3dtmVv8&_nc_ohc=SDRZeWnh8MMQ7kNvgGZdSmn&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ApFH9YFQGn3hXq2DGNcsjXi&oh=00_AYD2skYXc9fPrxFZiV-lwBTIxjAR_2AcVY3yWnor6my7UQ&oe=67A0D907",
              bio: "David’s design philosophy focuses on user-centric and visually appealing experiences.",
            },
            {
              name: "Khandokar Khalid Hasan",
              role: "Operations Head",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/470220341_1675258826535772_5067359254981911351_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFr7dpK3hGuZ_a2y2FHnWVkTbL3Ujq0DMxNsvdSOrQMzM297yhxU99p7Syk26Ejoqwyx_Ir28LaAJjJGHNin8wl&_nc_ohc=j8gI03LQQycQ7kNvgGXKSbN&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=Acb9nCrZy7ZkgPnm-9Q2i3B&oh=00_AYBEZYsKIdegmbVTQXbmaGriqit85QvH7rV3dmntgzgn1A&oe=67A0EB1A",
              bio: "Michael ensures our operations run smoothly, optimizing efficiency and productivity.",
            },
            {
              name: "Ahsanul Rony",
              role: "Marketing Manager",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/465916484_2012146755897853_1373804883374336523_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGPDoKkXii8tljVlD6z1l-yjJx3hnEUPNKMnHeGcRQ80mee1i5hw2o1lKXGmcTiNNhFU_Q022DmNd9NUWmdrO4g&_nc_ohc=akZB25DVaNkQ7kNvgGc1dMj&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ArDYL7rGEMxQEA-i2QrCLxz&oh=00_AYAn65w3ius3MV5VK94C1zY_Q12yW0CXeMHuqDZGwUj7bQ&oe=67A0EE11",
              bio: "Emma leads our marketing efforts, creating campaigns that resonate with our audience.",
            },

            {
              name: "Sampa Mondol",
              role: "HR Manager",
              img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/463337290_1397165837906576_504271629763853147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGiUz0jmx3xQWwlebL44JggYo2wLqRZJ7pijbAupFknugwO46KYnhBusLaJshLjayih3Qe1lRlHg0KltjWF38Wb&_nc_ohc=7PbTor2CDb8Q7kNvgFLMllF&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ATc_Bl73NTmcn_3qf4CCLHJ&oh=00_AYBRYAWZkYbiWwTB-vsTiOgtzmEds_OcaXjr-oxYj6-whA&oe=67A10B45",
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
