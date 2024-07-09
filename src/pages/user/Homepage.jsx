import React from "react";
import Hero from "../../components/user/home/Hero";
import PopularPlace from "../../components/user/home/PopularPlace";
import OurService from "../../components/user/home/OurService";
import Faq from "../../components/user/home/Faq";
import About from "../../components/user/home/About";
import CustomFooter from "../../components/user/common/Footer";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <PopularPlace />
    <OurService />
    <Faq />
    <CustomFooter />
  </>
);

export default HomePage;
