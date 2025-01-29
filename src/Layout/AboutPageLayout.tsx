import React from "react";
import NavbarForAbout from "@/Components/Navbar/NavbarForAbout";
import FooterForAbout from "@/Components/Footer/FooterForAbout";

const AboutPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <NavbarForAbout />
      <div style={{ marginTop: "60px" }}>{children}</div>
      <FooterForAbout />
    </div>
  );
};

export default AboutPageLayout;
