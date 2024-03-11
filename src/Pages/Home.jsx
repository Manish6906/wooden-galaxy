import React from "react";
import B_experience from "../Components/B_experience";
import Navbar from "../Components/Navbar";
import AbhiCards from "../Components/AbhiCards";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>
        <AbhiCards />
      </div>
      <div>
        <B_experience />
      </div>
    </>
  );
};

export default Home;
