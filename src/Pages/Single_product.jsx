import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import side4 from "../assets/single_products/side4.png";
import main from "../assets/single_products/main_image.png";
import Des1 from "../assets/single_products/description1.png";
import Des2 from "../assets/single_products/description2.png";
import ProductCard from "../Components/ProductCard";
import Footer2 from "../Components/Footer2";

const Single_product = () => {
  return (
    <>
      <div className="h-[100px] flex items-center justify-center sm:flex sm:justify-start sm:items-center bg-[#F9F1E7]  ">
        <div className="flex items-center gap-3 sm:gap-6  sm:ml-24">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="text-[20px] text-[#9F9F9F] font-normal">
              {" "}
              Home{" "}
            </Link>
            <div className="">
              <FaChevronRight />
            </div>
          </div>

          <div className="flex items-center  gap-2 sm:gap-4 ">
            <Link
              to="/Shop"
              className=" text-[20px] text-[#9F9F9F] font-normal"
            >
              {" "}
              Shop{" "}
            </Link>
            <div className="">
              <FaChevronRight />
            </div>
          </div>

          <div className="h-8 border-[1px] border-[#9F9F9F] hidden sm:block"></div>

          <p className="text-[20px] font-medium sm:font-semibold">
            Asgaard sofa
          </p>
        </div>
      </div>

      <div
        className="flex flex-col justify-center sm:flex sm:flex-col sm:justify-center 
       md:flex md:flex-col md:justify-center lg:flex lg:flex-row lg:justify-evenly gap-10 lg:gap-24 mb-7"
      >
        <div className="lg:w-1/2 flex justify-center pt-0 lg:pt-9 ml-0 sm:ml-20 mt-7 ">
          <div className="hidden sm:block">
            <img src={side4} alt="side-section image" />
          </div>

          <div>
            <img src={main} alt="main page image" />
          </div>
        </div>

        <div className="lg:w-1/2 ml-2 mb-2 mr-2 mt-7 ">
          <div>
            <div className=" text-[42px] mb-[3px] ">Asgaard sofa</div>

            <div className="text-[#9F9F9F] text-2xl mb-[3px]">
              Rs. 250,000.00
            </div>

            <div className="flex items-center gap-5 mb-[5px]">
              <div className="flex mb-3 mt-[15px] gap-1 sm:gap-2 text-base sm:text-xl text-yellow-500 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <div className="text-yellow-200">
                  <FaStar />
                </div>
              </div>

              <div className="h-6 border-[1px] border-[#9F9F9F] hidden sm:block"></div>

              <div className="text-[13px] text-[#9F9F9F]">
                5 Customer Review
              </div>
            </div>

            <p className=" text-base sm:text-xl mb-[10px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <p className="text-[1rem] text-[#9F9F9F] w-[27px] h-[21px] mb-[20px]">
              Size
            </p>

            <div className="flex gap-4 mb-4">
              <button className="h-[30px] w-[30px] rounded-[5px] bg-[#B88E2F] text-center">
                L
              </button>
              <button className="h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-center">
                XL
              </button>
              <button className="h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-center">
                XS
              </button>
            </div>

            <p className="text-[1rem] text-[#9F9F9F] w-[27px] h-[21px] mb-[20px]">
              Color
            </p>

            <div className="flex gap-4 mb-3">
              <button className="h-[30px] w-[30px] rounded-[50%] bg-[#816DFA] hover:border-[#816DFA] border-[1px]"></button>
              <button className="h-[30px] w-[30px] rounded-[50%] bg-[#000000] hover:border-black border-[1px]"></button>
              <button className="h-[30px] w-[30px] rounded-[50%] bg-[#B88E2F] hover:border-[#B88E2F] border-[1px]"></button>
            </div>

            <div className="mt-[50px] flex flex-wrap justify-center sm:flex sm:justify-start  gap-3 mb-[30px]">
              <div
                className="w-[123px] h-[65px] text-lg font-semibold border-[#9F9F9F] border-[1px] rounded-[10px] flex justify-evenly items-center  hover:bg-yellow-700
                hover:text-white"
              >
                <div>
                  <button>-</button>
                </div>
                <div>
                  <button>1</button>
                </div>
                <div>
                  <button>+</button>
                </div>
              </div>

              <div>
                <button
                  className="w-[215px] h-[65px] text-lg font-semibold border-[#000000] border-[1px] rounded-[10px] flex justify-evenly items-center hover:bg-yellow-700
                hover:text-white"
                >
                  Add To Cart
                </button>
              </div>

              <div>
                <button
                  className="w-[215px] h-[65px] text-lg font-semibold border-[#000000] border-[1px] rounded-[10px] flex justify-evenly items-center  hover:bg-yellow-700
                hover:text-white "
                >
                  + &nbsp; Compare
                </button>
              </div>
            </div>

            <div className=" border-[1px] border-[#D9D9D9] rounded-sm "></div>

            <div className="text-[#9F9F9F] mt-5 leading-9">
              <div>SKU &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : SS001</div>
              <div>Category &nbsp; &nbsp; : Sofas</div>
              <div>
                Tags &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : Sofa , Home
              </div>

              <div className="flex items-center gap-1 ">
                <div>Share &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;: </div>

                <div className="flex gap-2 sm:gap-5 text-black">
                  <div>
                    <Link to="Link">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div>
                    <Link to="Link">
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div>
                    <Link to="Link">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-[#D9D9D9] border-[1px] mb-9"></div>

      <div className=" flex justify-center gap-8 my-12">
        <p className="text-2xl font-medium underline text-center">
          Description
        </p>
        <Link to="Link">
          <p className="text-2xl text-[#9F9F9F] hidden sm:block">
            Additional Information
          </p>
        </Link>
        <Link to="Link">
          <p className="text-2xl text-[#9F9F9F] hidden sm:block">Reviews[5]</p>
        </Link>
      </div>

      <div className="  flex justify-center ">
        <p className=" text-[#9F9F9F] text-base px-14">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well- balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="flex flex-col  sm:flex sm:flex-row sm:justify-center gap-5 mx-2 sm:m-0 mt-4 mb-14">
        <div className="rounded-xl ">
          <img src={Des1} alt="left-image" />
        </div>
        <div className="rounded-xl  bg-[#F9F1E7]">
          <img src={Des2} alt="right-image" />
        </div>
      </div>

      <div className="w-full  border-[#D9D9D9] border-[1px] mt-16"></div>

      <div>
        <div className="text-4xl font-medium text-center mt-10 mb-8">
          Related Products
        </div>
      </div>

      <div>
        <ProductCard />
      </div>

      <div className="p-6 ">
        <button class="border-2 border-yellow-600 text-yellow-600 font-bold px-16 py-2 flex mx-auto ">
          Show More
        </button>
      </div>

      <div className="w-full border-[#D9D9D9] border-[1px] mt-9"></div>

      <div className="mt-5 ml-1 mr-1 mb-5">
        <Footer2 />
      </div>

      <div className="w-full  border-[#D9D9D9] border-[1px]  mb-12"></div>
    </>
  );
};

export default Single_product;
