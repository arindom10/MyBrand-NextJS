import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "60px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
