import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


// images for testimonials
import image from "../assets/testimonials/image_1.png"
import image1_1 from "../assets/testimonials/image_1.1.jpg"
import image2 from "../assets/testimonials/image_2.png"
import image3 from "../assets/testimonials/image_2.1.jpg"
import image4 from "../assets/testimonials/image_3.png"
import image3_1 from "../assets/testimonials/image_3.1.jpg"

const S_testimonials = () => {
  return (

    // TESTIMONIAL SECTION
    <div>

      <div className='py-8'>
        <p className='text-sm text-[#E58411] text-center'>Testimonials</p>
        <h2 className='text-center text-3xl italic mt-3'>Our Client Review</h2>
      </div>

      <div className='flex flex-col items-center md:flex-row md:justify-center md:gap-5'>

        {/* FIRST IMAGE */}

        <div className='flex flex-col items-center relative mb-4 '>
          <img className="h-96 w-64 relative" src={image} alt="image1" />

          <div className='hidden md:h-[45px] md:w-[45px] md:bg-gray-300  md:text-xl md:rounded-full md:flex 
          md:items-center md:justify-center md:absolute md:top-[31.1%] md:right-[88%] md:z-10'>

           <Link to="Link"> <FaArrowLeft /> </Link> 
          </div>


          <div className='h-[150px] w-[215px] bg-white  rounded-2xl absolute top-[44%]'>

            <div className='h-[50px] w-[50px] bg-white absolute left-[39%]  bottom-[123px] rounded-[50%]'>
              <img className='h-[40px] w-[40px] rounded-[50%] text-center ml-[4.5px] mt-1 ' src={image1_1} alt="" />

            </div>
 
            <div>
              <p className='font-semibold text-center mt-[20px]'>John Doe.</p>
              <p className='text-gray-600 text-[10px] text-center'>Lorem, ipsum dolor.</p>
              <p className='text-gray-500 text-[9px] text-center mt-[15px] mx-2'>"Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat
                similique"
              </p>
            </div>

            <div className='flex justify-center mt-[15px] gap-1 text-xs text-yellow-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <div className='text-yellow-300'>
                <FaStar />
              </div>
            </div>

          </div>
        </div>

        {/* SECOND IMAGE */}

        <div className='flex flex-col items-center mb-[72px] relative'>

          <img className="h-[330px] w-[239px] relative " src={image2} alt="image2" />

          <div className='h-[150px] w-[215px] bg-white  rounded-2xl absolute top-[51.5%]'>

            <div className='h-[50px] w-[50px] bg-white absolute left-[43%]  bottom-[123px] rounded-[50%]'>
              <img className='h-[40px] w-[40px] rounded-[50%] text-center ml-[4.5px] mt-1 ' src={image3} alt="" />

            </div>

            <div>
              <p className='font-semibold text-center mt-[20px]'>Shradhha k.</p>
              <p className='text-gray-600 text-[10px] text-center'>Lorem, ipsum dolor.</p>
              <p className='text-gray-500 text-[9px] text-center mt-[15px] mx-2'>"Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat tempore iure
                similique"
              </p>
            </div>

            <div className='flex justify-center mt-[15px] gap-1 text-xs text-yellow-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <div className='text-yellow-400'>
                <FaStar />
              </div>
            </div>

          </div>

        </div>

        {/* THIRD IMAGE */}
        <div className='flex flex-col items-center relative mb-3'> 
          <img className="h-96 w-64" src={image4} alt="image4" />
 
          <div className='hidden md:h-[45px] md:w-[45px] md:bg-gray-300  md:text-xl md:rounded-full md:flex 
          md:items-center md:justify-center md:absolute md:top-[31%] md:right-[-5%] md:z-10 '> 
 
            <Link to="Link"> <FaArrowRight /></Link>

          </div>

          <div className='h-[150px] w-[215px] bg-white  rounded-2xl absolute top-[44%]'>
            <div className='h-[50px] w-[50px] bg-white absolute left-[39%]  bottom-[123px] rounded-[50%]'>
              <img className='h-[40px] w-[40px] rounded-[50%] text-center ml-[4.5px] mt-1 ' src={image3_1} alt="" />

            </div>

            <div>
              <p className='font-semibold text-center mt-[20px]'>John Cena</p>
              <p className='text-gray-600 text-[10px] text-center'>Lorem, ipsum dolor bonjour.</p>
              <p className='text-gray-500 text-[9px] text-center mt-[15px] mx-2'>"Lorem ipsum dolor sit amet consectetur
                similique"
              </p> 
            </div>

            <div className='flex justify-center mt-[15px] gap-1 text-xs text-yellow-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <div className='text-yellow-200'>
                <FaStar />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* SUB FOOTER SECTION */}
      <div>
        <div className='w-full h-[400px] md:h-[200px] bg-[#FAF3EA] md:my-1 '>

          <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly md:pt-9'>

            <div className='flex mt-8'>
              <div className='text-[47px] pr-1'><HiOutlineTrophy /></div>
              <div>
                <p className='font-bold text-[22px]'>High Quality</p>
                <p className='text-gray-500 text-sm'>crafted from top materials </p>
              </div>
            </div>

            <div className='flex mt-8'>
              <div className='text-[50px] pr-1'><HiOutlineCheckBadge /></div>
              <div>
                <p className='font-bold text-[22px]'>Warranty Protection</p>
                <p className='text-gray-500 text-sm'>Over 2 years</p>
              </div>
            </div>

            <div className='flex mt-8'>
              <div className='text-[46px] pr-2'><FaHandHoldingHeart /></div>
              <div>
                <p className='font-bold text-[22px]'>Free Shipping</p>
                <p className='text-gray-500 text-sm'>Order above 150 $</p>
              </div>
            </div>

            <div className='flex mt-8 '>
              <div className='text-[47px] pr-1'><MdOutlineSupportAgent /></div>
              <div>
                <p className='font-bold text-[22px]'>24 / 7 Support</p>
                <p className='text-gray-500 text-sm'>Dedicated support</p>
              </div>
            </div>

          </div>
        </div> 
      </div>

 
    </div>

  )
}

export default S_testimonials
