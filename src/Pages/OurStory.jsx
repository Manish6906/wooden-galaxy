import React from "react";
import img from "../assets/OurStory.png";
import img1 from "../assets/OurStory2.png";
import img2 from "../assets/OurStory3.png";
const OurStory = () => {
  return (
    <div>
      <div className="relative">
        <img src={img} alt="An Image" className="w-full h-auto z-[-1] opacity-50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium text-2xl md:text-4xl">Our Story</p>
          <p className="text-sm">Home <strong>&gt;</strong> Our Story</p>
        </div>
      </div>

      <p className="text-center mt-6 md:mt-10 md:font-bold font-outline-2 md:text-6xl">
        The Future Of Wooden Galaxy
      </p>

      <h3 className="mb-3 md:mb-5 text-center text-xl md:text-2xl">
        "Where comfort meets craftsmanship: Wooden Galaxy's celestial <br />
        furniture collection."
      </h3>

      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 md:space-x-6 md:ml-32">
        <img
          className="w-full md:max-w-xl md:w-1/2 mb-6 md:mb-0 text-center"
          src={img1}
          alt="image"
        />
        <div className="md:max-w-xl mt-6 md:mt-0 md:text-left">
          <h4 className="text-center md:text-left ml-4 md:ml-0">
            WE DESIGN FURNITURE <br />
            <br />
            <span className="text-orange-800 text-2xl">Simple Creative</span>
            <br />
            <br />
            Step into a universe of timeless elegance with Wooden Galaxy. Our
            curated collection brings together simplicity and creativity,
            offering you furniture pieces that elevate your space with natural
            charm. Explore the stars of craftsmanship and design, where every
            piece tells a story of style and sophistication.
          </h4>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-28 ml-4 md:ml-32">
        <h4 className="text-center md:text-left ml-4 md:ml-12 mt-4 md:mt-6 w-full md:w-[351px]">
          WE DESIGN FURNITURE <br /> <br />
          <span className="text-orange-800 text-2xl">Design Quality</span>
          <br />
          <br />
          Discover unparalleled craftsmanship at Wooden Galaxy. Our commitment
          to design excellence ensures each piece embodies timeless elegance and
          functionality. From sleek modern designs to rustic classics, our
          furniture sets the standard for quality in every room. Elevate your
          space with the finest in design and craftsmanship from Wooden Galaxy.
        </h4>
        <img
          className="w-full md:max-w-3xl md:w-[550px] mt-6 md:mt-0 ml-4 md:ml-9"
          src={img2}
          alt="image"
        />
      </div>
    </div>
  );
};

export default OurStory;
