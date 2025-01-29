import HomeLayout from "@/Layout/HomeLayout";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Services ",
    description: "This is Service page",
  };
};

const Services = () => {
  return (
    <HomeLayout>
      <h1>This is service page</h1>
    </HomeLayout>
  );
};

export default Services;
