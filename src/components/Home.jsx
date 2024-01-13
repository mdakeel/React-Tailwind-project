import React from "react";
import banner from "../assets/banner-img.png";
import { Banner } from "../shared/Banner";

export const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Develop your skills without diligence"
        subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There aremany different kinds of animals that live in China."
        btn1={"Get Started"}
        btn2="Discout"
      />
    </div>
  );
};
