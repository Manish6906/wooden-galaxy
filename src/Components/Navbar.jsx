import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import Navimg from "../assets/navbg.png";
import Trolley from "../assets/Trolley.png";
import Logo from "../assets/Logo.png";
import Wish from "../assets/Wishlist.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className="relative h-[1084px] "
        style={{
          backgroundImage: `url(${Navimg})`,
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute">
          <img
            src={Navimg}
            alt=""
            className=" min-h-screen w-full object-cover "
          />
        </div> */}

        <div
          className="h-24 p-4 flex text-white w-full 
                justify-between absolute text-sm font-light"
        >
          <div>
            <img src={Logo} alt="" className="h-12 w-24" />
          </div>

          <div className="flex gap-4 md:w-4/6 w-auto  justify-between">
            <div>
              <div className="flex justify-end md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text- focus:outline-none"
                >
                  <AiOutlineMenuUnfold size={32} className="ml- mt-2" />
                </button>
              </div>
              <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
                <ul className="flex md:flex-row flex-col gap-7 pt-3 ">
                  <Link to="/">Home</Link>
                  <Link to="/Shop">Shop</Link>
                  <Link to="/OurStory">Our Story</Link>
                  <Link to="/Faq">Faq</Link>
                  <Link to="/Blog">Blog</Link>
                  <Link to="/Contact">Contact</Link>
                </ul>
              </div>
            </div>
            {/* <div>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center">
                  <IoMdLogIn size={25} color="blue" /> 
                  <Link to="/Login" style={{ opacity: 1 }}>
                    <h1>Login</h1>
                  </Link>
                </div>

                <div className="flex items-center ">
                  <img src={Wish} alt="" className="h-6 w-6" />
                </div>
                <div className="flex items-center ">
                  <img src={Trolley} alt="" className="h-6 w-7" />
                </div>
              </div>
            </div> */}

            {/* <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
              <ul className="flex gap-6 pt-2">
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/OurStory">Our Story</Link>
                <Link to="/Faq">Faq</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact">Contact</Link>
              </ul>
            </div> */}

            {/* 
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none">
                <AiOutlineMenuUnfold size={45} />
              </button>
            </div> */}

            {/* <div className="flex justify-end md:flex"> */}
            <div className="flex gap-4 pb-5">
              <div className="flex items-center">
                <IoMdLogIn size={25} color="blue" />
                <Link to="/Login" style={{ opacity: 1 }}>
                  <h1>Login</h1>
                </Link>
              </div>
              <div className="flex items-center ">
                <img src={Wish} alt="" className="h-6 w-6" />
              </div>
              <div className="flex items-center ">
                <img src={Trolley} alt="" className="h-6 w-7" />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div class="flex justify-center">
          <h1 class="absolute text-white text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center mt-32 md:mt-32 lg:mt-36 italic">
            Make Your Interior More <br /> Minimalist & Modern
          </h1>

          <div class="mt-[30rem] absolute border-2 bg-gray-400 bg-opacity-45 w-52 h-10 flex justify-between pl-2 pr-1 rounded-full ">
            <div className="text-white flex items-center">
              <h1>Search furniture</h1>
            </div>
            <div className="h-6 w-6 mt-1 bg-[#E58411] rounded-full flex items-center justify-center">
              <IoSearch size={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
