import React from 'react';
import SubFooter from '../Components/SubFooter';
import Footer from '../Components/Footer';
import CartNav from '../Components/CartNav';
import main from "../assets/single_products/main_image.png";

const Cart = () => {
  return (
    <>
      <CartNav />
      <section className='md:mx-20 mt-10 mx-5'>
        <div className='flex flex-col md:flex-row justify-between md:mx-4 md:my-8'>
          <div className='md:w-3/4'>
            <ul className='flex justify-between bg-[#F9F1E7] md:px-36 md:mx-5'>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
            <div className='flex justify-between my-5 md:my-5 items-center md:mx-10'>
              <div className='flex'>
                <img className='w-[105px] h-[105px] md:w-[105px] md:h-[105px]' src={main} alt="" />
                assgard sofa
              </div>
              <div>Rs. 250,000.00</div>
              <div>1</div>
              <div>Rs. 250,000.00</div>
            </div>
          </div>
          <div className='bg-[#F9F1E7] my-3 md:my-0 md:block md:w-3/12'>
            Cart Totals
          </div>
        </div>
      </section>
      <SubFooter />
      <Footer />
    </>
  )
}

export default Cart