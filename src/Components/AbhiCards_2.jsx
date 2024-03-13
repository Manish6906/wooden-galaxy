import React from "react";
import MainCardData_2 from "./MainCardData_2";

export default function AbhiCards_2() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 lg:w-8/12">
          <div className="grid grid-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-3">
            {MainCardData_2.map((cardData) => (
              <div
                key={cardData.id}
                className="bg-white shadow-md  overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={cardData.imagescr}
                    alt={cardData.heading}
                    className="object-cover w-full h-full "
                    
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <div className="flex flex-col">
                      <div className="text-white  ">
                        <p className="text-xs">{cardData.heading}</p>

                        <p className="text-xs">{cardData.para}</p>

                        <p className="text-xs">{cardData.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    </div>
  );
}