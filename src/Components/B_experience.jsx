import React from "react";
import rectangle from "../assets/Rectangle1451.png";
import material from "../assets/Rectangle1446.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import material_1 from "../assets/Group48095417.png";
import material_2 from "../assets/Group48095419.png";

const B_experience = () => {
  return (
    <div>

      <section className="m-2 sm:m-0 sm:mt-10">
        <div className="md:flex md:gap-20">
          <div className="flex flex-col items-center">
            <img
              className="rounded-xl h-[445px] w-[629px]"
              src={rectangle}
              alt="image"
            />
          </div>
<<<<<<< HEAD
          <div className=" text-center  p-2 md:w-[400px] md:text-left md:mt-16">
            <h5 className="italic  my-2 text-[#E58411]">EXPERIENCES</h5>
            <h2 className="text-[#1E1E1E] italic  text-2xl">
=======
          <div className=" text-center p-2 md:w-[400px] md:text-left">
            <h5 className="italic text-[#E58411] tracking-widest text-lg">EXPERIENCES</h5>
            <h2 className="text-[#1E1E1E] italic text-[30px] lg:text-[42px] font-normal lg:leading-[49.64px]">
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
              We Provide You The <br /> Best Experience
            </h2>
            <p className="text-[#1E1E1E] text-lg opacity-70 italic mt-3 lg:eading-[33.3px]">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <a href="#" className="mt-6 flex justify-center md:justify-start italic text-[#E58411]">
              More info
              <FaLongArrowAltRight className="mt-[6px] w-7"/>
            </a>
          </div>
        </div>
      </section>

      <section className="m-2 sm:m-0 sm:mt-20">
        <div className="flex flex-col-reverse md:flex md:flex-row md:gap-20 md:justify-end">
          <div className="text-center p-2 md:w-[400px] md:text-left lgb:mt-24">
            <h5 className=" italic my-2 text-[#E58411] tracking-widest text-lg">MATERIALS</h5>
            <h2 className="text-[#1E1E1E] italic text-[30px] lg:text-[42px] font-normal lg:leading-[49.64px]">
              Very Serious Materials For <br /> Making Furniture
            </h2>
            <p className="text-[#1E1E1E] text-lg opacity-70 mt-3 lg:eading-[33.3px]">
              Because WG was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <a href="#" className="mt-6 flex justify-center md:justify-start italic text-[#E58411]">
              More info
              <FaLongArrowAltRight className="mt-[6px] w-7"/>
            </a>
          </div>

          <div className=" flex flex-col items-center md:flex md:flex-row md:justify-center">
            <div className="mb-5">
              <img
<<<<<<< HEAD
                className="h-[229px]  w-[223px] hidden md:block"
=======
                className="w-[223px] h-[200px] lg:h-[250px] mt-6 hidden md:block"
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
                src={material_1}
                alt="chair"
              />
              <img
<<<<<<< HEAD
                className="h-[317px] w-[223px]  hidden md:block"
=======
                className="w-[223px] h-[200px] lg:h-[338.42px] hidden md:block"
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
                src={material_2}
                alt="sofa"
              />
            </div>

            <div className="flex h-[629px] w-[445px] flex-col items-center">
              <img
                className="rounded-xl"
                src={material}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B_experience;
