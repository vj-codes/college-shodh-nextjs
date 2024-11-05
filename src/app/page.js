"use client"

import FAQs from "@/components/home/FAQs";
import Home from "@/components/home/Home";
import Programs from "@/components/home/Programs";
import TopCities from "@/components/home/TopCities";

const HomePage = () => {
  return (
    <>
      <Home />
      <Programs />
      <TopCities />
      {/* <HomeBlog /> */}
      <FAQs />
    </>
  );
};

export default HomePage;