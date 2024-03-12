import React from "react";
import B_experience from "../Components/B_experience";
import Navbar from "../Components/Navbar";
import AbhiCards from "../Components/AbhiCards";
import CheckOut from "./CheckOut";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
        <Navbar />
        <AbhiCards />
        <B_experience />
        <Footer />
        <CheckOut />
    </>
  );
};

export default Home;
