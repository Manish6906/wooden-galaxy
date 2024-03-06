import React from 'react'
import rectangle from "../assets/Rectangle1451.png"
import material from "../assets/Rectangle1446.png"
import { FaLongArrowAltRight } from "react-icons/fa"

const B_experience = () => {
  return (
    <div>
        <section className="my-6">
            <div>
                <div>
                    <img className="h-60 mx-auto rounded-xl" src={rectangle} alt="image" />
                </div>
                <div className='w-[330px] mx-auto'>
                  <h5 className='text-center italic my-2 text-[#E58411]'>EXPERIENCES</h5>
                  <h2 className='text-[#1E1E1E] text-center italic text-2xl'>We Provide You The Best Experience</h2>
                  <p className='text-center text-[#1E1E1E] text-sm opacity-70'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                  <a href="#" className='flex justify-center italic text-[#E58411]'>More info<FaLongArrowAltRight className='mt-[6px]'/></a>
                </div>
            </div>
        </section>


        <section className="my-6">
            <div>
                <div>
                    <img className="h-60 mx-auto rounded-xl" src={material} alt="image" />
                </div>
                <div className='w-[330px] mx-auto'>
                  <h5 className='text-center italic my-2 text-[#E58411]'>MATERIALS</h5>
                  <h2 className='text-[#1E1E1E] text-center italic text-2xl'>Very Serious Materials For Making Furniture</h2>
                  <p className='text-center text-[#1E1E1E] text-sm opacity-70'>Because WG was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                  <a href="#" className='flex justify-center italic text-[#E58411]'>More info<FaLongArrowAltRight className='mt-[6px]'/></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default B_experience