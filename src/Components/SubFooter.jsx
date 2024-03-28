import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import React from 'react'

const SubFooter = () => {
  return (
    <div>
      <div>
        <div className='w-full h-[470px] md:h-[250px] bg-[#FAF3EA] flex flex-1 justify-center'>

          <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly gap-5'>

            <div className='flex'>
              <div className='text-[60px] pr-1'><HiOutlineTrophy /></div>
              <div>
                <p className='font-semibold font-poppins leading-[37px] text-[#242424] text-[25px]'>High Quality</p>
                <p className='text-[#898989] text-[20px] leading-[30px] font-poppins font-medium'>crafted from top materials </p>
              </div>
            </div>

            <div className='flex'>
              <div className='text-[60px] pr-1'><HiOutlineCheckBadge /></div>
              <div>
                <p className='font-semibold font-poppins leading-[37px] text-[#242424] text-[25px]'>Warranty Protection</p>
                <p className='text-[#898989] text-[20px] leading-[30px] font-poppins font-medium'>Over 2 years</p>
              </div>
            </div>

            <div className='flex'>
              <div className='text-[60px] pr-2'><FaHandHoldingHeart /></div> 
              <div>
                <p className='font-semibold font-poppins leading-[37px] text-[#242424] text-[25px]'>Free Shipping</p>
                <p className='text-[#898989] text-[20px] leading-[30px] font-poppins font-medium'>Order over 150 $</p>
              </div>
            </div>

            <div className='flex '>
              <div className='text-[60px] pr-1'><MdOutlineSupportAgent /></div>
              <div>
                <p className='font-semibold font-poppins leading-[37px] text-[#242424] text-[25px]'>24 / 7 Support</p>
                <p className='text-[#898989] text-[20px] leading-[30px] font-poppins font-medium'>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter