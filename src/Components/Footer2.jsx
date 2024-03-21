import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="h-auto flex items-center justify-center flex-col  gap-8 sm:gap-8 sm:flex-row sm:flex sm:items-center sm:justify-evenly mt-20 bg-[#FFFFFF]">
        <div className="text-[#9F9F9F] text-base text-center sm:text-start">
          <p>
            400 University Drive Suite 200 Coral <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
=======
    <div className='h-auto flex items-center justify-center flex-col font-medium gap-8 sm:gap-8 sm:flex-row sm:flex sm:items-center sm:justify-evenly  bg-[#FFFFFF]'>
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b

        <div className="flex  justify-center gap-8 sm:gap-12">
          <div>
            <p className="text-[#9F9F9F] mb-2 sm:mb-8">Links</p>
            <ul className="flex flex-col leading-10">
              <Link to="/">Home</Link>
              <Link to="/Shop">Shop</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </ul>
          </div>

<<<<<<< HEAD
          <div className=" mb-10">
            <p className="text-[#9F9F9F] mb-2 sm:mb-8">Help</p>
            <ul className="flex flex-col leading-10">
              <Link to="">Payment Options</Link>
              <Link to="">Returns</Link>
              <Link to="">Privacy Policies</Link>
            </ul>
          </div>
        </div>

        <div className=" mb-[122px] text-center sm:text-start ">
          <p className="text-[#9F9F9F] mb-4 sm:mb-8">Newsletter</p>
          <div className="text-center sm:text-start">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="outline-none border-b-[1.8px] text-sm mr-4"
            />
            <button className="underline text-sm font-medium">SUBSCRIBE</button>
          </div>
        </div>
=======
      <div className='flex  justify-center gap-8 sm:gap-14 sm:leading-10'>

      <div> 
          <p className='text-[#9F9F9F] mb-2 sm:mb-8'>Links</p>
          <ul className='flex flex-col leading-[50px]'>
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </ul>
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Footer2;
=======
      <div className=' mb-10'>
          <p className='text-[#9F9F9F] mb-2 sm:mb-8'>Help</p>
          <ul className='flex flex-col leading-[50px]'>
          <Link to="">Payment Options</Link>
          <Link to="">Returns</Link>
          <Link to="">Privacy Policies</Link>
        </ul>
      </div>

      </div>

      <div className=' mb-[122px] text-center sm:text-start leading-[60px]'> 
      <p className='text-[#9F9F9F] mb-4 sm:mb-8'>Newsletter</p>
      <div className='text-center sm:text-start'>
        <input type="email" placeholder='Enter Your Email Address' className='outline-none border-b-[1.8px] text-sm mr-4'/>
        <button className='underline text-sm font-medium'>SUBSCRIBE</button>
      </div>
      </div>

      </div>
    </ > 
  )
}

export default Footer2
>>>>>>> 665f4bef339979094567fb637b84301a971e9d8b
