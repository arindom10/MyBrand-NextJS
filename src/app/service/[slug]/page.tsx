import HomeLayout from "@/Layout/HomeLayout";
import React from "react";

const page = ({ params }: any) => {
  return <HomeLayout> {params.slug}</HomeLayout>;
};

export default page;
