import React from "react";
import { Link } from "react-router-dom";
import checkout from "../assets/CheckoutNavbarImage.png";

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
          <p className="font-medium text-2xl md:text-5xl font-poppins md:h-[72px] md:w-[233px]">
            CheckOut
          </p>
          <p className="text-sm">
            <strong>Home &gt;</strong> Checkout
          </p>
        </div>
      </div>

      <div className="lg:mt-60 lg:ml-44 lg:mr-36 ml-10 mr-10 lg:flex mt-10">
        <div className="flex-none lg:w-[608px] sm:w-full md:flex-col">
          <div>
            <label className="md:text-3xl mt-4 md:mt-32 font-bold">
              Billing details
            </label>
          </div>
          <form action="#" method="post">
            <div className="flex flex-col sm:flex-row mt-8 md:flex-row">
              <div className="flex-none">
                <label className="font-medium">First Name</label>
                <br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-0 md:mt-4 sm:w-[260px] mr-4 lg:w-[211px] w-full"
                />
              </div>
              <div className="flex-initial mt-4 sm:mt-0">
                <label className="font-medium">Last Name</label>
                <br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-0 md:mt-4 sm:w-[260px] mr-4 lg:w-[211px] w-full "
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px] "
              />
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Country / Region</label>{" "}
              <br />
              <select
                name=""
                id=""
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              >
                <option value="">Sri Lanka</option>
              </select>
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Street address</label>
              <br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Town / City</label>
              <br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Province</label>
              <br />
              <select
                name=""
                id=""
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              >
                <option value="">Western Province</option>
              </select>
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">ZIP Code</label>
              <br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Phone</label>
              <br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
            <div className="mt-8">
              <label className="mt-5 font-medium">Email Address</label>
              <br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 sm:mt-5 w-full lg:w-[453px]"
              />
            </div>
          </form>
        </div>

        <div className="flex-initial w-full mt-10">
          <div className="flex flex-col lg:flex-row lg:gap-80 gap-4 ">
            <div>
              <h1 className="font-medium text-xl lg:mt-4 sm:mt-2">Product</h1>
              <h1 className="opacity-50 lg:mt-4 sm:mt-2">Asgaard sofa X 1</h1>
              <h1 className="font-medium lg:mt-4 sm:mt-2">Subtotal</h1>
              <h1 className="font-medium lg:mt-4 sm:mt-2">Total</h1>
            </div>
            <div>
              <h1 className="font-medium text-xl lg:mt-4 sm:mt-2">Subtotal</h1>
              <h1 className="text-base lg:mt-4 sm:mt-2">Rs.250,000.00</h1>
              <h1 className="text-base lg:mt-4 sm:mt-2">Rs.250,000.00</h1>
              <p className="mb-4 mt-5 font-bold w-[178px] h-[36px] text-[#B88E2F;] text-2xl lg:-ml-10 sm:ml-1  sm:mt-2">
                Rs.250,000.00
              </p>
            </div>
          </div>
          <hr />
          <div>
            <input
              type="radio"
              name="paymentMethod"
              className="mt-3 font-medium"
            />
            Direct Bank Transfer
            <p className="opacity-50 mt-3">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="opacity-50">
              <input
                type="radio"
                name="paymentMethod"
                className="opacity-50 mt-3"
              />
              Direct Bank Transfer <br />
              <input
                type="radio"
                name="paymentMethod"
                className="opacity-50 mt-3"
              />
              Cash On Delivery
            </div>
            <p className="mt-4 font-medium tracking-wider font-poppins">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <span className="font-bold">privacy policy.</span>
            </p>
            <button className="rounded-2xl border-black border-2 lg:ml-28 lg:top-[1118px] lg:left-[883px] lg:w-[318px] lg:h-[64px] lg:mt-8 w-full mt-8 h-16">
              Place order
            </button>
          </div><br /><br />
        </div>
      </div>
    </>
  )
};

export default CheckOut;
