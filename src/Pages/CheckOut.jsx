import React from "react";
import CheNav from "../Components/CheNav";

const CheckOut = () => {
  return (
    <>
      <CheNav />
      <div className="lg:flex lg:mt-24">
        <div className=" mt-8  md:ml-[15%] lg:ml-12">
          <h1 className="ml-5 font-poppins">
            <strong>Biling Details</strong>
          </h1>
          <form action="">
            <div className="lg:flex flex mt-5">
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>First Name</strong>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 w-[76.5%] lg:w-full h-[75px] ml-5 mb-5 md:w-[120%]  rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-10 font-poppins md:ml-28 lg:ml-10 ">
                  <strong>Last Name</strong>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 w-[76.5%] lg:w-full ml-7 h-[75px] md:w-[100%] md:ml-28 lg:ml-10 rounded-md"
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Company Name ( Optional )</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Country / Region</strong>
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="w-[90%] ml-5 md:w-[600px] lg: border-2 pl-4 h-[75px] mt-3 mb-4  lg:w-[453px] opacity-40 border-black rounded-md"
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Street Address</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Town / City</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Province</strong>
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="w-[90%] ml-5 md:w-[600px] lg: border-2 border-black pl-4 h-[75px] mt-3 mb-4  lg:w-[453px] opacity-40 rounded-md"
                >
                  <option value="Western Province">Western Province</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>ZIP code</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Phone</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="ml-5 font-poppins">
                  <strong>Email Address</strong>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-3 mb-4 lg:w-[453px] rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="md:w-[600px] lg: border-2 h-[75px] w-[90%] ml-5 mt-6 lg:w-[453px] rounded-md pl-2"
                  placeholder=" Additional Information"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex-col lg:flex lg:w-full mt-8 lg:ml-12 ml-5 mr-5 md:ml-12">
          <div className="lg:flex gap-[65%] font-poppins md:flex ">
            <h1 className="mt-3"><strong>Product</strong></h1>
            <h1 className="mt-3"><strong>Subtotal</strong></h1>
          </div>
          <div className="lg:flex gap-[54.5%] font-poppins md:flex md:gap-[56%]">
            <h1 className="mt-3">Asgaard sofa x 1</h1>
            <h1 className="mt-3">Rs 250,000.00</h1>
          </div>
          <div className="lg:flex gap-[63%] font-poppins md:flex ">
            <h1 className="mt-3">Subtotal</h1>
            <h1 className="mt-3">Rs 250,000.00</h1>
          </div>
          <div className="lg:flex gap-[55%] font-poppins md:flex md:gap-[60%]">
            <h1 className="mt-3">Total</h1>
            <h1 className="mt-3 text-[#B88E2F] font-bold h-[36px] text-2xl leading-9 lg:w-[78px] lg:h-[36px]">
              Rs<span className="ml-1 lg:mb-12">250,000.00</span>
            </h1>
          </div>

          <hr />
          <div>
            <p className="mt-4 font-poppins mb-4 lg:mt-12">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <input type="radio" name="btn" className="font-poppins" />
            <label htmlFor="" className="font-poppins">&nbsp;
              Direct Bank Transfer
            </label>
            <br />
            <input type="radio" name="btn" className="font-poppins" />
            <label htmlFor="" className="font-poppins">&nbsp;
              Cash on Delivery
            </label>
            <br />
          </div>
          <div>
            <p className="font-poppins mt-4 mb-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="lg:w-full ">
            <button className="border-2 border-black rounded-md font-poppins p-4 w-full ">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
