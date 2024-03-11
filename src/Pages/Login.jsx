import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className='flex'>
        <div className='w-2/4 pl-[18rem] pt-[6rem]'>
          <div className='relative'>
            <img src="src\assets\loginImg.png" className='absolute z-40' alt="" />
            <img src="src\assets\LoginImgback2.png" className='absolute z-320' alt="" />
            <img src="src\assets\LoginImgback3.png" className='absolute z-30' alt="" />
            <img src="src\assets\loginImgback4.png" className='absolute z-10 top-48' alt="" />
          </div>

        </div>
        <div className='w-2/4 pr-[18rem] pt-[6rem]'>
          <div>
            <h1 className='text-5xl font-bold py-4 text-[#444B59]'>WELCOME</h1>
            <h3 className='text-base text-[#444B59] pb-{10px}'>Don't have a account <span className='text-base text-[#B5B0AB]'>Sign up</span> </h3>
          </div>
          <div className='pt-[1rem] pl-[2rem]'>
            <form action="#" method='POST'>
              <div className="mb-4">
                <label className="block mb-1" for="username">Username</label>
                <input type="text" id="username" className="w-full border-2 p-2 rounded-full outline-none" placeholder="deniel123@gmail.com" />
              </div>
              <div className="mb-4">
                <label className="block mb-1" for="password">Password</label>
                <input type="password" id="password" className="w-full border-2 p-2 rounded-full outline-none" placeholder="••••••••" />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-full form-checkbox" />
                  <span className="ml-2">Remember me</span>
                </label>
                <p className="text-sm hover:underline">Forget password?</p>
              </div>
              <button className="w-full border-2 p-2 rounded-full outline-none text-[white] border-[#B5B0AB] bg-[#B5B0AB]">Sign In</button>
              <div className="mt-4 flex items-center justify-center">
                <hr className="w-28 decoration-[#C8D3F9]" /> <span className='p-2 mb-1'>or continue with</span> <hr className="w-28" />
              </div>
              <div className="flex justify-evenly mt-4">
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FcGoogle className='text-3xl mx-3' />
                </button>
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FaFacebook className='text-[#8699da] text-3xl mx-3' />
                </button>
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FaApple className='text-[#444B59] text-3xl mx-3' />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login