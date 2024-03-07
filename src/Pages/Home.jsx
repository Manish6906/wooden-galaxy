import React from 'react'

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-2/4'>
        <img src="src\assets\loginImg.png" alt="" />
      </div>
      <div className='w-2/4 py-5'>
        <div>
          <h1 className='text-5xl font-bold py-4 text-[#444B59]'>WELCOME</h1>
          <h3 className='text-base text-[#444B59] pb-{10px}'>Don't have a account <span className='text-base text-[#B5B0AB]'>Sign up</span> </h3>
        </div>
        <div className='pt-[50px]'>
          <form>
            <label>
              Userame:
            </label>
            <input type="text" name="name" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home