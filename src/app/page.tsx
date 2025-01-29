import HomeLayout from "@/Layout/HomeLayout";
import React from "react";
import "./globals.css";
import HomePageOverview from "@/Components/HomePageComponents/HomePageOverview";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home ",
    description: "This is Home page",
  };
};

const page = () => {
  return (
    <HomeLayout>
      <HomePageOverview />
    </HomeLayout>
  );
};

export default page;
