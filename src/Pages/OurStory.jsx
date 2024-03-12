import React from "react";
import img from "../assets/OurStory.png";
import img1 from "../assets/OurStory2.png";
import img2 from "../assets/OurStory3.png";
const OurStory = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <img
          src={img}
          alt="An Image"
          className="w-full h-[316px] z-[-1] opacity-50 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium text-2xl sm:text-3xl lg:text-4xl">
            Our Story
          </p>
          <p className="text-sm">
            Home <strong>&gt;</strong> Our Story
          </p>
        </div>
      </div>

      <div className="w-full ">
        <p className="text-center mt-6 sm:mt-8 lg:mt-10 lg:font-bold font-outline-2 sm:text-5xl lg:text-6xl ">
          The Future Of Wooden Galaxy
        </p>

        <h3 className="mb-3 sm:mb-4 lg:mb-5 text-center text-md sm:text-lg lg:text-2xl sm:mx-auto ml-3 mr-3 mt-2">
          "Where comfort meets craftsmanship: Wooden Galaxy's celestial <br />
          furniture collection."
        </h3>

        <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-10 lg:mt-20 lg:space-x-6  sm:ml-0">
          <img
            className=" md:ml-0 mr-3 max-size-[748px] mt-6 lg:mt-0 ml-4 sm:ml-6 "
            src={img1}
            alt="image"
          />
          <div className="sm:max-w-md mt-6 lg:mt-0 sm:mx-auto lg:ml-4">
            <div className="lg:ml-5 w-full">
              <h4 className="text-center sm:text-left ml-4 sm:ml-0 ">
                WE DESIGN FURNITURE{" "}
              </h4>{" "}
              <br />
              <br />
              <span className="text-orange-800 text-sm sm:text-lg lg:text-2xl">
                Simple Creative
              </span>
            </div>
            <br />
            <br />
            <div className="mx-auto sm:mr-3 lg:ml-5 lg:w-full">
              Step into a universe of timeless elegance with Wooden Galaxy. Our
              curated collection brings together simplicity and creativity,
              offering you furniture pieces that elevate your space with natural
              charm. Explore the stars of craftsmanship and design, where every
              piece tells a story of style and sophistication. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Non, qui. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Esse quibusdam eos
              quae officia quia harum excepturi perspiciatis modi? Cum
              laudantium at placeat? Quasi nam sint, accusamus consequuntur
              tempore fugiat modi.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end sm:flex-row items-center mt-8 sm:mt-10 sm:mx-auto ">
          <div className=" mt-6 lg:mt-0 ">
            <h4 className="text-center sm:text-left sm:ml-0 font-normal">
              WE DESIGN FURNITURE{" "}
            </h4>
            <br />
            <br />
            <span className="text-orange-800 text-sm sm:text-lg lg:text-2xl font-normal">
              Simple Creative
            </span>
            <br />
            <br />
            <div className="mx-auto px-3 font-normal text-[26px] leading-[39px]">
              Step into a universe of timeless elegance with Wooden Galaxy. Our
              curated collection brings together simplicity and creativity,
              offering you furniture pieces that elevate your space with natural
              charm. Explore the stars of craftsmanship and design, where every
              piece tells a story of style and sophistication Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Obcaecati adipisci,
              molestias odit possimus, numquam reiciendis laboriosam neque eos,
              itaque mollitia voluptatem. Ipsum quod corporis vel culpa eius sit
              repellendus. Vel.
            </div>
          </div>
          <img className="max-size-[748px] mt-6" src={img2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
