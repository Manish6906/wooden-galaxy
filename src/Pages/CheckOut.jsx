import React from "react";
import img from "../assets/OurStory.png";

const CheckOut = () => {
  return (
    <>
      <div className="relative">
        <img
          src={img}
          alt="An Image"
          className="w-full h-auto z-[-1] opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium text-2xl md:text-4xl">CheckOut</p>
          <p className="text-sm">
            Home <strong>&gt;</strong> CheckOut
          </p>
        </div>
      </div>

      <h1 className="ml-40 text-3xl mt-32 font-bold">Billing details</h1>
      <div className="flex">
        <div className="flex-none "> First Name
            <input type="text" className="" />
        </div>
        <div className="flex-initial ">Last Name
          <input type="text" className="border-" />
        </div>
        <div className="flex-initial "></div>
      </div>
    </>
  );
};

export default CheckOut;
