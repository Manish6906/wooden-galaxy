import React from 'react';
import AbhiCards_2 from '../Components/AbhiCards_2';
import SubFooter from '../Components/SubFooter';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import Nav from "../assets/faq/Nav.png";

const Shop = () => {
  return (
    <>
      <section>
        <div className="w-full h-50 flex justify-center">
          <img src={Nav} alt="" />

          <div className="absolute flex flex-col justify-center mt-2 sm:mt-14">
            <h1 className="font-medium text-3xl sm:text-5xl">Shop</h1>
            <ul className="mt-1 sm:mt-5 flex gap-1">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Blog" style={{ opacity: 0.5 }}>
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AbhiCards_2 />
      <SubFooter />
      <Footer />
    </>
  )
}

export default Shop