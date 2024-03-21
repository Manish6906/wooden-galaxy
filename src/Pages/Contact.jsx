import React from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/faq/Nav.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
<<<<<<< HEAD
import Footer2 from '../Components/Footer2'
import SubFooter from '../Components/SubFooter'
=======
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";

>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
const Contact = () => {
  return (
    <>
      <div>
        <div className="w-full h-50 flex justify-center items-center">
          <img src={Nav} alt="" />

          <div className="absolute flex flex-col items-center justify-center"></div>
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="font-semibold md:text-[42px] text-[18px]">
              Contact
            </h1>
            <ul className="mt-0 lg:mt-5 flex gap-1 ">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Contact" style={{ opacity: 0.5 }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 md:mt-24">
          <h1 class="text-2xl md:text-4xl font-poppins font-semibold text-center">
            Get In Touch With Us
          </h1>
          <h2 class="text-sm md:text-base ml-8 mr-8 text-center font-poppins text-[#9F9F9F] my-2 md:my-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </h2>
        </div>

        <div className="flex justify-evenly pt-28  Csm:inline">
          <div className="csm:ml-[20vw]">
            <div className="flex mb-8">
              <div>
                <IoLocationSharp size={25} />
              </div>
              <div>
                <h1 className="text-xl font-poppins font-semibold ml-8 ">
                  Adderss
                </h1>
                <h2 className="ml-8 font-poppins">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                  States
                </h2>
              </div>
            </div>

            <div className="flex mb-8">
              <div>
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h1 className="text-xl font-semibold font-poppins ml-8 ">
                  Phone
                </h1>
                <h2 className="ml-8 font-poppins">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </h2>
              </div>
            </div>

            <div className="flex pt-7">
              <div>
                <MdAccessTimeFilled size={25} />
              </div>
              <div>
                <h1 className="text-xl font-poppins font-semibold ml-8 ">
                  Working Time
                </h1>
                <h2 className="ml-8 font-poppins">
                  Monday-Friday: 9:00 - <br />
                  22:00 <br />
                  Saturday-Sunday: 9:00 - <br />
                  21:00
                </h2>
              </div>
            </div>
          </div>
          <div className=" font-poppins">
            <form>
              <div class="mb-6 md:mb-10">
                <label class="block font-poppins text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  class="mt-2 md:mt-6 border border-gray-300 rounded-md h-12 md:h-16 w-full md:w-[490px]"
                />
              </div>
              <div class="mb-6 md:mb-10">
                <label class="block text-sm font-poppins font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  class="mt-2 md:mt-6 border border-gray-300 rounded-md h-12 md:h-16 w-full"
                />
              </div>
              <div class="mb-6 md:mb-10">
                <label class="block text-sm font-poppins font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  class="mt-2 md:mt-6 border border-gray-300 rounded-md h-12 md:h-16 w-full"
                />
              </div>
              <div class="mb-6 md:mb-10">
                <label class="block text-sm font-poppins font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  class="mt-2 md:mt-6 border border-gray-300 rounded-md w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-[#B88E2F] text-white font-poppins px-10 md:px-20 py-2 rounded-md hover:bg-[#aea591]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <SubFooter /> 
      <Footer2/>
=======
      <SubFooter />
      <Footer />
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
    </>
  );
};

export default Contact;
