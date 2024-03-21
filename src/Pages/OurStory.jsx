import React from "react";
import img from "../assets/OurStory.png";
import img1 from "../assets/OurStory2.png";
import img2 from "../assets/OurStory3.png";
import backimg from "../assets/Back.png";
import { Link } from "react-router-dom";
import SubFooter from "../Components/SubFooter";
import Footer2 from "../Components/Footer2"

const OurStory = () => {
  return (
    <>
    <div className="w-full overflow-hidden">
      <div className="relative">
        <img
          src={img}
          alt="An Image"
          className="w-full h-[240px] z-[-1] opacity-50 object-cover "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium sm:text-3xl lg:text-5xl size-[48px] leadig-[72px] h-[72px] w-[224px] font-poppins">
            Our Story
          </p>
          <p className="">
            <ul className="md:mt-3 flex gap-1 ml-10 border-2 -mt-10">
              <li>
                <Link
                  to="/"
                  className="font-poppins text-black opacity-95 "
                >
                  Home
                </Link>
              </li>
              <li className="font-poppins text-black opacity-95">
                <strong>&gt;</strong>
              </li>
              <li>
                <Link
                  to="/OurStory"
                  className="font-poppins text-black opacity-95 lg:text-base "
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="w-full ">
<<<<<<< HEAD
        <p className="text-center font-poppins mt-6 sm:mt-8 lg:mt-10 lg:font-bold font-outline-2 sm:text-5xl lg:text-6xl ">
          The Future Of Wooden Galaxy
        </p>

        <h3 className="mb-3 font-poppins sm:mb-4 lg:mb-5 text-center text-md sm:text-lg lg:text-2xl sm:mx-auto ml-3 mr-3 mt-2">
=======
        <p className="text-center mt-6 sm:mt-8 lg:mt-10  sm:text-5xl lg:text-6xl text-[#AF835E;] font-poppins ">
          The Future Of Wooden Galaxy
        </p>

        <h3 className="mb-3 sm:mb-4 lg:mb-0 lg:mt-5 font-poppins text-center text-md sm:text-lg lg:text-2xl sm:mx-auto ml-3 mr-3 mt-2">
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
          "Where comfort meets craftsmanship: Wooden Galaxy's celestial <br />
          furniture collection."
        </h3>

<<<<<<< HEAD
        <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
          <img className="max-size-[748px] mt-6 -ml-3 md:-ml-10" src={img1} alt="image" />
          <div className=" mt-6 lg:mt-0 text-center">
            <p className="text-sm font-poppins sm:text-lg lg:text-2xl font-normal">
            WE DESIGN FURNITURE
            </p>
            <br />
            <span className="text-orange-800 font-poppins text-sm sm:text-lg lg:text-2xl font-normal">
              Simple Creative
            </span>
            <br />
            <br />
            <div className="mx-auto font-poppins px-3 font-normal text-[26px] leading-[39px] text-start">
              Step into a universe of timeless elegance with Wooden Galaxy. Our
              curated collection brings together simplicity and creativity,
              offering you furniture pieces that elevate your space with natural
              charm. Explore the stars of craftsmanship and design, where every
              piece tells a story of style and sophistication Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Obcaecati adipisci,
              molestias odit possimus, numquam reiciendis laboriosam neque eos,
              itaque mollitia voluptatem. Ipsum quod corporis vel culpa eius sit
              repellendus. Vel.
=======
        <div
          className="bg-opacity-50 bg-cover lg:pt-20"
          style={{ backgroundImage: `url(${backimg})` }}
        >
          <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
            <img
              className="lg:h-[748px] lg:w-[7048px] lg:ml-2 mt-6 -ml-3 md:-ml-10 max-size-[748px] sm:ml-8"
              src={img1}
              alt="image"
            />
            <div className=" mt-6 lg:mt-0">
              <p className=" text-center md:text-left lg:text-left sm:text-lg lg:text-2xl font-normal lg:ml-16 font-poppins ">
                WE DESIGN FURNITURE
              </p>
              <br />
              <p className=" text-center md:text-left text-[#AF835E;] text-sm sm:text-lg lg:text-2xl font-normal lg:ml-16 lg:text-[46px] font-poppins">
                Simple Creative
              </p>
              <br />
              <br />
              <div className="mx-auto px-3 font-normal text-[26px] leading-[39px] text-start lg:ml-12 lg:mr-36">
                Step into a universe of timeless elegance with Wooden Galaxy.
                Our curated collection brings together simplicity and
                creativity, offering you furniture pieces that elevate your
                space with natural charm. Explore the stars of craftsmanship and
                design, where every piece tells a story of style and
                sophistication Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Obcaecati adipisci, molestias odit possimus,
                numquam reiciendis laboriosam neque eos, itaque mollitia
                voluptatem. Ipsum quod corporis vel culpa eius sit repellendus.
                Vel.
              </div>
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
            </div>
          </div>

<<<<<<< HEAD
        <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
          <div className=" mt-6 lg:mt-0 text-center">
            <p className="text-sm font-poppins sm:text-lg lg:text-2xl font-normal">
            WE DESIGN FURNITURE
            </p>
            <br />
            <span className="text-orange-800 font-poppins text-sm sm:text-lg lg:text-2xl font-normal">
              Simple Creative
            </span>
            <br />
            <br />
            <div className="mx-auto px-3 font-poppins font-normal text-[26px] leading-[39px] text-start">
              Step into a universe of timeless elegance with Wooden Galaxy. Our
              curated collection brings together simplicity and creativity,
              offering you furniture pieces that elevate your space with natural
              charm. Explore the stars of craftsmanship and design, where every
              piece tells a story of style and sophistication Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Obcaecati adipisci,
              molestias odit possimus, numquam reiciendis laboriosam neque eos,
              itaque mollitia voluptatem. Ipsum quod corporis vel culpa eius sit
              repellendus. Vel.
=======
          <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
            <div className=" mt-6 lg:mt-24 lg:ml-12 ">
              <p className="text-sm sm:text-lg lg:text-2xl font-normal font-poppins lg:ml-5 text-center md:text-left">
                WE DESIGN FURNITURE
              </p>
              <br />
              <p className="text-[#AF835E;] lg:text-2xl font-normal lg:text-[46px] lg:ml-5 text-center md:text-left">
                Design Quaility
              </p>
              <br />
              <br />
              <div className="mx-auto px-3 font-normal text-[26px] leading-[39px] text-start">
                Step into a universe of timeless elegance with Wooden Galaxy.
                Our curated collection brings together simplicity and
                creativity, offering you furniture pieces that elevate your
                space with natural charm. Explore the stars of craftsmanship and
                design, where every piece tells a story of style and
                sophistication Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Obcaecati adipisci, molestias odit possimus,
                numquam reiciendis laboriosam neque eos, itaque mollitia
                voluptatem. Ipsum quod corporis vel culpa eius sit repellendus.
                Vel.
              </div>
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
            </div>
            <img
              className="max-size-[748px] lg:h-[748px] mt-24"
              src={img2}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
    <SubFooter />
    <Footer2 />
    </>
  );
};

export default OurStory;
