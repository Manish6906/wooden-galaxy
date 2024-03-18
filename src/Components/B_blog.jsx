import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import millennial from "../assets/Rectangle68.png";
import decorating from "../assets/Rectangle69.png";
import handmade from "../assets/Rectangle70.png";
import millen from "../assets/Rectangle71.png";
import newly from "../assets/Rectangle72.png";
import pieces from "../assets/Rectangle73.png";
import modern from "../assets/Rectangle74.png";
import colorfuly from "../assets/Rectangle75.png";
import Nav from "../assets/faq/Nav.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const B_blog = () => {
  return (
    <div>



      <section>
        <div className="w-full h-50 flex justify-center items-center">
          <img src={Nav} alt="" />

          <div className="absolute flex flex-col items-center justify-center"></div>
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Blog</h1>
            <ul className="mt-5 flex gap-1">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Faq" style={{ opacity: 0.5 }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section>
        <div className="h-8 flex items-center justify-end pr-5 shadow-sm shadow-slate-500">
          <GiHamburgerMenu />
        </div>
      </section>



      <section className="my-10">
        {/* outer div */}
        <div className="md:flex md:flex-row md:justify-center md:gap-12 sm:gap-2">
          {/* main div */}
          <div className="flex flex-col items-center">
            {/* first div */}
            <div className="p-2">
              <div className="md:w-[700px] rounded-lg p-2 md:p-0 sm:p-3">
                <img src={millennial} alt="millennial" />
              </div>
              <div className="p-2 md:p-0 sm:p-3">
                <ul className="flex gap-10 mt-4">
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaUser className="mt-1" /> Admin
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <MdDateRange className="mt-1" /> 14 Oct 2022
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaTag className="mt-1" />
                    Wood
                  </li>
                </ul>
              </div>
              <div className="mt-2 p-3 md:p-0 sm:p-3">
                <h2 className="text-2xl font-medium">
                  Going all-in with millennial design
                </h2>
                <p className="md:w-[700px] text-justify text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident odit, itaque autem sequi debitis eos ullam dolorem
                  natus corrupti aliquid ipsa ipsum nostrum id eius excepturi
                  commodi voluptatem. Quisquam ipsum exercitationem nihil
                  architecto incidunt suscipit soluta provident esse voluptate
                  quia doloribus iste aut reprehenderit fugit nulla quibusdam
                  aliquid vitae autem recusandae illum consequatur possimus,
                  aspernatur earum molestiae! At, tempora provident!
                </p>
                <a href="#" className="mt-4 block underline underline-offset-8">
                  Read more
                </a>
              </div>
            </div>

            {/* second div */}
            <div className="mt-10">
              <div className="md:w-[700px] rounded-lg p-2 md:p-0 sm:p-3">
                <img src={decorating} alt="decorating" />
              </div>
              <div className="p-2 md:p-0 sm:p-3">
                <ul className="flex gap-10 mt-4">
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaUser className="mt-1" /> Admin
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <MdDateRange className="mt-1" /> 14 Oct 2022
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaTag className="mt-1" />
                    Handmade
                  </li>
                </ul>
              </div>
              <div className="mt-2 p-3 md:p-0 sm:p-3">
                <h2 className="text-2xl font-medium">
                  Exploring new ways of decorating
                </h2>
                <p className="md:w-[700px] text-justify text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi facilis neque, sint perspiciatis laudantium, libero
                  dolore cum, eius beatae aspernatur natus veniam recusandae?
                  Quia, ab eveniet beatae consequuntur illum accusamus minus
                  doloribus animi quis consequatur alias repellendus vitae
                  perferendis quisquam quod unde. Quia nesciunt in error ullam
                  quo illo labore eaque veritatis. Modi aliquid, vel
                  reprehenderit ducimus quae cumque voluptatibus.
                </p>
                <a href="#" className="mt-4 block underline underline-offset-8">
                  Read more
                </a>
              </div>
            </div>

            {/* third div */}
            <div className="mt-10">
              <div className="md:w-[700px] p-2 md:p-0 sm:p-3">
                <img src={handmade} alt="handmade" />
              </div>
              <div className="p-2 md:p-0 sm:p-3">
                <ul className="flex gap-10 mt-4">
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaUser className="mt-1" /> Admin
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <MdDateRange className="mt-1" /> 14 Oct 2022
                  </li>
                  <li className="flex gap-1 text-[#9F9F9F]">
                    <FaTag className="mt-1" />
                    Wood
                  </li>
                </ul>
              </div>
              <div className="mt-2 p-3 md:p-0 sm:p-3">
                <h2 className="text-2xl font-medium">
                  Handmade piece that took time to make
                </h2>
                <p className="md:w-[700px] text-justify text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam aliquam animi quidem quaerat dignissimos voluptatibus
                  reiciendis ipsum expedita amet, ut sapiente deleniti maiores
                  nobis ab facilis. Cum quisquam ea vero quod, optio porro
                  voluptates sapiente mollitia unde, eligendi fuga doloremque
                  error quia, culpa excepturi! Cupiditate et dolores nobis illum
                  error, autem perferendis consequatur dolor, veniam delectus,
                  magnam amet! Autem, sequi?
                </p>
                <a href="#" className="mt-4 block underline underline-offset-8">
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* aside div */}
          <div className="hidden  lg:flex flex-col">
            {/* search box */}
            <div className="relative">
              <form action="">
                <input
                  type="search"
                  className="border-2 border-[#9F9F9F] p-2 pl-4 pr-14 rounded-lg outline-none"
                />
                <IoSearchSharp className="text-xl absolute top-3 right-8" />
              </form>
            </div>

            {/* Categories */}
            <div className="p-7">
              <h3 className="font-medium text-xl">Categories</h3>
              <ul className="mt-4 flex flex-col gap-7 text-[#9F9F9F]">
                <li className="flex justify-between">
                  <li>Crafts</li>
                  <li>2</li>
                </li>
                <li className="flex justify-between">
                  <li>Design</li>
                  <li>8</li>
                </li>
                <li className="flex justify-between">
                  <li>Handmade</li>
                  <li>7</li>
                </li>
                <li className="flex justify-between">
                  <li>Interior</li>
                  <li>1</li>
                </li>
                <li className="flex justify-between">
                  <li>Wood</li>
                  <li>6</li>
                </li>
              </ul>
            </div>

            {/* recent posts */}
            <div className="p-7 mt-5">
              <h3 className="font-medium text-xl">Recent Posts</h3>

              <div className="flex-col gap-3">
                <div className="flex gap-2 mt-4">
                  <div className="w-[70px] rounded-lg">
                    <img src={millen} alt="millen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Going all-in with <br /> millen
                    </h4>
                    <p className="text-xs mt-1 text-[#9F9F9F]">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="w-[70px] rounded-lg">
                    <img src={newly} alt="new" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Exploring new ways <br />
                      of decorating
                    </h4>
                    <p className="text-xs mt-1 text-[#9F9F9F]">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="w-[70px] rounded-lg">
                    <img src={pieces} alt="pieces" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Handmade pieces <br />
                      that took time to make
                    </h4>
                    <p className="text-xs mt-1 text-[#9F9F9F]">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="w-[70px] rounded-lg">
                    <img src={modern} alt="modern" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Modern home in <br />
                      Milan
                    </h4>
                    <p className="text-xs mt-1 text-[#9F9F9F]">03 Aug 2022</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="w-[70px] rounded-lg">
                    <img src={colorfuly} alt="colorful" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Colorful office <br />
                      redesign
                    </h4>
                    <p className="text-xs mt-1 text-[#9F9F9F]">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section className="md:flex md:flex-row md:justify-center gap-5 flex flex-col items-center">
            <div className="flex gap-5">
                <button className="bg-[#B88E2F] text-white p-2 pl-3 pr-3 rounded-lg">1</button>
                <button className="bg-[#F9F1E7] p-2 pl-3 pr-3 rounded-lg">2</button>
                <button className="bg-[#F9F1E7] p-2 pl-3 pr-3 rounded-lg">3</button>
            </div>
            <div>
                <button className="bg-[#F9F1E7] p-2 pl-3 pr-3 rounded-lg">Next</button>
            </div>
        </section>

    </div>
  );
};

export default B_blog;
