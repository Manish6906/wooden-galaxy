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

      <div className="flex mt-12 ml-28">
        <div className="flex-none w-[608px]  top-[479px] left-[734px] ">
          <div>
            <label className=" md: text-3xl mt-4 md:mt-32 font-bold">
              Billing details
            </label>
          </div>
          <form action="#" method="post">
            <div className="flex mt-8">
              <div className="flex-none">
                <label> First Name </label><br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-4 w-[211px] mr-4"
                />
              </div>
              <div className="flex-initial ">
                <label> Last Name </label><br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-20 mt-2 md:mt-4 w-[211px] mr-4"
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="mt-5">Company Name (Optional)</label>
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Country / Region</label> <br />
              <select name="" id="" className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5">
                <option value="" >Sri Lanka</option>
              </select>
            </div>
            <div className="mt-8">
            <label className="mt-5">Street address</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Town / City</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Province</label><br />
            <select name="" id="" className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5">
                <option value="" >Western Province</option>
              </select>
            </div>
            <div className="mt-8">
            <label className="mt-5">ZIP Code</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Phone</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Email Address</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
          </form>
        </div>
        <div className="flex-initial w-[608px] h-[789px] top-[479px] left-[734px] ">
        <div className="flex gap-80">
            <div>
              <h1 className="w-[94px] h-[36px] font-medium size-[24px] leading-9">Product</h1>
              <h1 className="opacity-50">Asgaard sofa X 1</h1>
              <h1>Subtiotal</h1>
              <h1>Total</h1>
            </div>
            <div>
              <h1 className="font-medium size-[24px]">Subtotal</h1>
              <h1>Rs. 250,000.00</h1>
              <h1>Rs. 250,000.00</h1>
              <h1 className="font-bold">Rs. 250,000.00</h1>
            </div>
          </div>
          <hr />
          <div>
            <h1>Direct Bank Transfer</h1>
            <h1>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>
            <h1>Direct Bank Transfer</h1>
            <h1>Cash On Delivery</h1>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>
          <button className="rounded-2xl border-black border-2 ml-32 top-[1118px] left-[883px] w-[318px] h-[64px]">Place order</button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
