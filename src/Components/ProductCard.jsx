import React from "react";
import Data from "./Data";

function ProductCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-4/5 lg:w-8/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 m-3">
          {Data.map((cardData) => (
            <div key={cardData.id} className="bg-white shadow-md overflow-hidden">
              <div className="p-2 flex flex-col">
                <img src={cardData.imagescr} className="object-fill h-full w-full" alt={cardData.heading} />
                <div className="p-2">
                  <p className="text-sm font-semibold">{cardData.heading}</p>
                  <p className="text-sm">{cardData.para}</p>
                  <p className="text-base font-bold">{cardData.price}</p>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
