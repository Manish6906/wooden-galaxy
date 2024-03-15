import React from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/faq/Nav.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div>
        <div className="w-full h-50 flex justify-center items-center">
          <img src={Nav} alt="" />

          <div className="absolute flex flex-col items-center justify-center"></div>
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Contact</h1>
            <ul className="mt-5 flex gap-1">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Faq" style={{ opacity: 0.5 }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32">
          <h1 className="text-4xl font-semibold text-center">
            Get In Touch With Us
          </h1>
          <h2 className="text-center text-[#9F9F9F] my-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </h2>
        </div>

        <div className="flex justify-evenly pt-24  Csm:inline">
          <div className="Csm:ml-[20vw]">
            <div className="flex">
              <div>
                <IoLocationSharp />
              </div>
              <div>
                <h1 className="text-xl font-bold ml-8 ">Adderss</h1>
                <h2 className="ml-8">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                  States
                </h2>
              </div>
            </div>

            <div className="flex pt-7">
              <div>
                <FaPhoneAlt />
              </div>
              <div>
                <h1 className="text-xl font-bold ml-8 ">Phone</h1>
                <h2 className="ml-8">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </h2>
              </div>
            </div>

            <div className="flex pt-7">
              <div>
                <MdAccessTimeFilled />
              </div>
              <div>
                <h1 className="text-xl font-bold ml-8 ">Working Time</h1>
                <h2 className="ml-8">
                  Monday-Friday: 9:00 - <br />
                  22:00 <br />
                  Saturday-Sunday: 9:00 - <br />
                  21:00
                </h2>
              </div>
            </div>
          </div>
          <div className="Csm:ml-10 Csm:mr-10">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-80"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#B88E2F] text-white px-20 py-2 rounded-md hover:bg-[#aea591]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
