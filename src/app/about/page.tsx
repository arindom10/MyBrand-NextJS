import AboutPageLayout from "@/Layout/AboutPageLayout";
import { Metadata } from "next";

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
              {
                name: "John Doe",
                role: "CEO",
                img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t51.75761-15/464366463_18331011652148619_7496386573159741193_n.jpg?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEpn1IcqYiWLWShSzn-A4HW1LhI7ym38kHUuEjvKbfyQZSAdauGkJT_ENKUONnneQJu3deSM_GtZbANT8FfmNEw&_nc_ohc=hmgsaw62FNsQ7kNvgE82kgD&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=A5r7GRNqZ2q95I98w2dVPxc&oh=00_AYAbGGGslBYzxJaSCMTmpYZgeaMW0-yShDTKskiKLsgWCw&oe=67A0E83E",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/474204736_2227870450940282_2521337680964295355_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEbNNGfFyDX-JaL8bBXLkL58ixPexfF-iryLE97F8X6KgtJ35_pSaXujQlRajyGij7Zvsxtw1eFO8PUyleZF_DZ&_nc_ohc=cmZYdyxJeTAQ7kNvgElDK3G&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AImGmLvKW4JGOpcDSppcwHW&oh=00_AYBJEViBpGJoGDbl6bydoz5AFTrTuepycbKVg_8xqc5g3g&oe=67A0D64A",
              },
              {
                name: "David Lee",
                role: "Lead Designer",
                img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/361623600_3464357397208791_8352590462810908965_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjA12YBTczlMbo6KFC4nTmvX4hebsJtUy9fiF5uwm1TGkaJZZLDlPfFYgvvgY3b1NZtXKBcHtuo7GZe3dtmVv8&_nc_ohc=SDRZeWnh8MMQ7kNvgGZdSmn&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ApFH9YFQGn3hXq2DGNcsjXi&oh=00_AYD2skYXc9fPrxFZiV-lwBTIxjAR_2AcVY3yWnor6my7UQ&oe=67A0D907",
              },
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
