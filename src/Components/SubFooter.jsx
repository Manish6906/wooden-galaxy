import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import React from 'react'

const SubFooter = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="mt-16">
        <div className='w-full h-[400px] md:h-[200px] bg-[#FAF3EA] md:my-1 '>
=======
      <div>
        <div className='w-full h-[470px] md:h-[250px] bg-[#FAF3EA] md:my-1 '>
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b

          <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly md:pt-9'>

            <div className='flex mt-8'>
              <div className='text-[60px] pr-1'><HiOutlineTrophy /></div>
              <div>
                <p className='font-bold text-[23px]'>High Quality</p>
                <p className='text-gray-500 text-lg font-semibold'>crafted from top materials </p>
              </div>
            </div>

            <div className='flex mt-8'>
              <div className='text-[60px] pr-1'><HiOutlineCheckBadge /></div>
              <div>
                <p className='font-bold text-[23px]'>Warranty Protection</p>
                <p className='text-gray-500 text-lg font-semibold'>Over 2 years</p>
              </div>
            </div>

            <div className='flex mt-8'>
              <div className='text-[60px] pr-2'><FaHandHoldingHeart /></div> 
              <div>
                <p className='font-bold text-[23px]'>Free Shipping</p>
                <p className='text-gray-500 text-lg font-semibold'>Order over 150 $</p>
              </div>
            </div>

            <div className='flex mt-8 '>
              <div className='text-[60px] pr-1'><MdOutlineSupportAgent /></div>
              <div>
                <p className='font-bold text-[23px]'>24 / 7 Support</p>
                <p className='text-gray-500 text-lg font-semibold'>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter
