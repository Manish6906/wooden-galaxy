import React from "react";
import B_experience from "../Components/B_experience";
import Navbar from "../Components/Navbar";
import AbhiCards from "../Components/AbhiCards";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import SubFooter from "../Components/SubFooter";
import Shop from "./Shop";
import OurStory from "./OurStory";

const Home = () => {
  return (
    <>
        <Navbar />
        <AbhiCards />
        <B_experience />
        <Testimonials />
        <SubFooter />
        <Footer /> 
    </>
  );
};

export default Home;
