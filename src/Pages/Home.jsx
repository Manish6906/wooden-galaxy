import React from "react";
import B_experience from "../Components/B_experience";
import Navbar from "../Components/Navbar";
import AbhiCards from "../Components/AbhiCards";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
        <Navbar />
        <AbhiCards />
        <B_experience />
        <Testimonials />
        <Footer />
    </>
  );
};

export default Home;
