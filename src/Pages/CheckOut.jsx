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

      <div>
        <h1 className="ml-4 md:ml-40 text-3xl mt-4 md:mt-32 font-bold">
          Billing details
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-none ml-4 md:ml-40 mt-5 ">
            First Name <br />
            <input
              type="text"
              className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-4 w-full mr-4"
            />
          </div>
          <div className="flex-initial ml-4 md:ml-40 mt-5">
            Last Name <br />
            <input
              type="text"
              className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-4 w-full mr-4"
            />
          </div>
          <div className="flex-initial"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-initial"></div>

        <div className="flex flex-col md:w-[530px] ml-4 md:ml-40">
          <h1 className="mt-5">Company Name (Optional)</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Country / Region</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Street address</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Town / City</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Province</h1>
          <select
            name="Province"
            id="province"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          >
            <option value="Western province" className="">
              Western province
            </option>
          </select>

          <h1 className="mt-5">ZIP code</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Phone</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <h1 className="mt-5">Email Address</h1>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-5 mr-4"
          />

          <input
            type="text"
            placeholder="Additional Information"
            className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-24 mr-4"
          />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
