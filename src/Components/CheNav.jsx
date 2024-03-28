import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../assets/faq/Nav.png";

function CheNav() {
  return (
    <div>
        <div className="w-full h-50 flex justify-center">
        <img src={Nav} alt="" className='w-full md:w-full lg:w-full' />
        <div className="absolute flex flex-col justify-center mt-2 sm:mt-14">
          <h1 className="font-medium text-3xl sm:text-5xl">Checkout</h1>
          <ul className="mt-1 sm:mt-5 flex gap-1 lg:ml-10 md:ml-10">
            <li>
              <Link to="/" style={{ opacity: 1 }}>
                Home
              </Link>
            </li>
            <li style={{ opacity: 0.5 }}>&gt;</li>
            <li>
              <Link to="/Blog" style={{ opacity: 0.5 }}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CheNav