import React from "react";
import HeroSection from "../components/Home/HeroSection";
import QualityAssurance from "../components/Home/QualityAssurance";
import DisplayCard from "../components/Home/DisplayCard";
import Collection from "../components/Home/Collection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <QualityAssurance />
      <DisplayCard />
      <Collection />
    </div>
  );
};

export default Home;
