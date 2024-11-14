import Footer from "@components/Footer";
import Hero from "@components/Hero";
import PlacementSection from "@components/PlacementSection";
import React from "react";

const page = () => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Hero name="Placements" lineTwoHeading={'Placements'} image={imageUrl} />
      <PlacementSection />
      <Footer />
    </>
  );
};

export default page;
