import React from "react";
import { Link } from "react-router-dom";
import checkout from "../assets/CheckoutNavbarImage.png";

const CheckOut = () => {
  return (
    <div>
      {/* navbar start */}
      <div className="w-full h-50 flex justify-center items-center">
        <img src={checkout} alt="image" />

        <div className="absolute flex flex-col items-center justify-center"></div>
        <div className="absolute flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl">Checkout</h1>
          <ul className="mt-5 flex gap-1">
            <li>
              <Link to="/" className="font-bold" style={{ opacity: 1 }}>
                Home
              </Link>
            </li>
            <li className="font-bold" style={{ opacity: 1 }}>
              &gt;
            </li>
            <li>
              <Link to="/checkout" style={{ opacity: 1 }}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar ended */}
    
      {/* form start */}
      {/* <div className=""> */}
        <div >
          
          <div className="">
            <h1 className="font-bold text-3xl">Billing details</h1>
          
            <form>
              <div className="flex ">
              {/* <div className="flex"> */}
              <div>
                <label htmlFor="" className="font-normal ">
                  First Name
                </label>
                <div ><input type="text" className="border-2 border-black" /></div>
              </div>
              <div>
                <label htmlFor="" className="font-normal">
                  Last Name
                </label>
                <div><input type="text" className="border-2 border-black" /></div>
              </div>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>

        {/* description start */}
        {/* <div className=""></div> */}
        {/* description ended */}
      {/* </div> */}
      {/* form ended */}
    </div>
  );
};

export default CheckOut;
