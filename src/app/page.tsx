import HomeLayout from "@/Layout/HomeLayout";
import React from "react";
import "./globals.css";
import HomePageOverview from "@/Components/HomePageComponents/HomePageOverview";

const page = () => {
  return (
    <HomeLayout>
      <HomePageOverview />
    </HomeLayout>
  );
};

export default page;
