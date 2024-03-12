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
      <label className=" md: text-3xl mt-4 md:mt-32 font-bold">
          Billing details
        </label>
      </div>
      <div className="flex flex-row-reverse">
        <div className="flex flex-col md:flex-row">
          {/* div for the billing part */}
          <div className="flex gap-80 pl-60 mt-12">
            <div>
              <h1>Product</h1>
              <h1>Asgaard sofa X 1</h1>
              <h1>Subtiotal</h1>
              <h1>Total</h1>
            </div>
            <div>
              <h1>Subtotal</h1>
              <h1>Rs. 250,000.00</h1>
              <h1>Rs. 250,000.00</h1>
              <h1>Rs. 250,000.00</h1>
            </div>
          </div>
        </div>
        
      
      <form action="#" className="ml-40 my-10">
        <div className="flex flex-col md:w-[530px]  md:">
          <div className="w-[453px] flex flex-row">
            <div className="h-[75px]  mt-2 w-[40%]">
            <label className="mt-5">Frist Name</label>
            <input
              type="text"
              className="border-black border-2 opacity-50 rounded-md  mt-2  md:mt-5 "
            />
            </div>
            <div className="h-[75px]  mt-2 w-[40%]">
            <label className="mt-5">Last Name</label>
            <input
              type="text"
              className="border-black border-2 opacity-50 rounded-md  md:mt-5 "
            />
            </div>
            
            
          </div>

          <label className="mt-5">Company Name (Optional)</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
          />

          <label className="mt-5">Country / Region</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px] "
          />

          <label className="mt-5">Street address</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          />

          <label className="mt-5">Town / City</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          />

          <label className="mt-5">Province</label>
          <select
            name="Province"
            id="province"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          >
            <option value="Western province" className="">
              Western province
            </option>
          </select>

          <label className="mt-5">ZIP code</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          />

          <label className="mt-5">Phone</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          />

          <label className="mt-5">Email Address</label>
          <input
            type="text"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 md:mt-5 w-[453px]"
          />

          <input
            type="text"
            placeholder="   Additional Information"
            className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-16 w-[453px]"
          />
        </div>
      </form>
      </div>
    </>
  );
};

export default CheckOut;
