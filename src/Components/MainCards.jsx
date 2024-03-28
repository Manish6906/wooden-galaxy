import React from "react";
import McardData from "./McardData";

function MainCards() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full px-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 m-3">
            {McardData.map((cardData) => (
              <div
                key={cardData.id}
                className=" group relative z-10 bg-[#F4f5f7] shadow-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="tag">
                  <div
                    className="absolute -top-2 right-2 text-white flex flex-shrink-0 ml-44 w-[48px] h-[48px] rounded-full bg-[#2EC1AC] mt-4 z-50"
                    style={{
                      backgroundColor: cardData.tag_color,
                    }}
                  >
                    <h1 className="text-center mt-3 ml-2">
                      {cardData.tag_name}
                    </h1>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={cardData.imagescr}
                    alt={cardData.heading}
                  />
                </div>
                <div className="p-2 flex flex-col">
                  <p className="text-[24px] text-[#3a3a3a] font-poppins  font-semibold leading-[28px] ">
                    {cardData.heading}
                  </p>
                  <p className="text-sm text-[#898989] text-[16px] leading-6 font-medium ">
                    {cardData.para}
                  </p>
                  <p className="text-[20px] leading-[30px] font-poppins font-semibold ">
                    {cardData.price}
                  </p>
                </div>
                <div className="absolute translate-x-[150%] group-hover:translate-x-0 duration-500 top-0 inset-0 flex-col bg-black/50 flex justify-center items-center text-white  z-50 ">
                  <button className="w-[70%] mx-auto text-center py-3 bg-white text-orange-400">
                    Add to cart
                  </button>

                  <div className="social flex gap-2 text-center justify-between mt-5">
                    <div className="share">
                      <p className="text-center">Share</p>
                    </div>
                    <div className="share">
                      <p className="text-center">Compare</p>
                    </div>
                    <div className="share">
                      <p className="text-center">like</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
