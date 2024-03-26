import React from "react";
import img from "../assets/OurStory.png";
import CheNav from "../Components/CheNav";

const CheckOut = () =>{
return (
  <>
<CheNav />
    <div className="form-box w100% flex gap-[0.625rem] px-[4.625rem] py-[3.25rem]  bg-[#E5E5E5]">
      <form action="#" className="flex flex-1 flex-wrap gap-[1.625rem] ">
        <div className="left w-[602px] flex flex-col  gap-[36px] px-[74px] py-[35px] ">
          <div className="heading-text font-semibold text-[36px] font-poppins">
            Billing Details
          </div>
          <div className="name-box lg:flex gap-[30px]">
            <div className="input-box flex flex-col flex-1 gap-[22px] ">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                First Name
              </label>
              <input
                type="text"
                id="Fname"
                className="h-[75px] lg:w-[211px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
            <div className="input-box flex flex-col flex-1 gap-[22px]">
              <label htmlFor="Lname" className="text-[1rem] font-medium font-poppins">
                Last Name
              </label>
              <input
                type="text"
                id="Lname"
                className="h-[75px] lg:w-[211px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="company-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="country-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Country / Region
              </label>
              <select
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent py-[20px] px-[20px] text-[#9F9F9F]"
              >
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
            </div>
          </div>
          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Street Address
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Town /City
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          
          <div className="country-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Province
              </label>
              <select
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent py-[20px] px-[20px] text-[#9F9F9F]"
              >
                <option value="Sri Lanka">Western Province</option>
              </select>
            </div>
          </div>

          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                ZIP code
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Phone
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              <label htmlFor="Fname" className="text-[1rem] font-medium font-poppins">
                Email Address
              </label>
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
          <div className="street-box flex gap-[30px]">
            <div className="input-box flex flex-col gap-[22px]">
              
              <input
                type="text"
                id="Fname"
                className="w-[453px] h-[75px]
                                border-[2px]  rounded-[10px] border-[#9f9f9f] bg-transparent px-[20px]"
              />
            </div>
          </div>
        </div>
        
        <div className="right flex flex-col flex-1 py-[70px] gap-[1.5rem]">
          <div className="heading-box flex justify-between ">
            <h2 className="heading font-medium text-[1.5rem] font-poppins">Product</h2>
            <h2 className="heading font-medium text-2xl font-poppins">Subtotal </h2>
          </div>
          <div className="item-box flex justify-between">
            <p className="item-name text-base text-[#9F9F9F] flex items-center gap-3 font-poppins">
              Asguard Sofa
              <span className="quantity text-xs font-medium text-black font-poppins">
                X 1
              </span>
            </p>
            <p className="amount text-base font-light">
              <span className="currency font-poppins">Rs. </span>
              250,000.00
            </p>
          </div>
          <div className="subtotal-box flex justify-between">
            <p className="subtotal text-black font-poppins">Subtotal</p>
            <p className="amount text-base font-light">
              <span className="currency font-poppins">Rs. </span>
              250,000.00
            </p>
          </div>
          <div className="total-box flex justify-between">
            <p className="subtotal text-black font-poppins">Total</p>
            <p className="amount text-2xl font-bold text-[#B88E2F]">
              <span className="currency font-poppins">Rs. </span>
              250,000.00
            </p>
          </div>
          <div className="line w-full h-[1px] bg-[#D9D9D9]"></div>
          <div className="payment-box flex flex-col gap-5">
            <div className="selected-method flex gap-4 items-center ">
              <p className="method-name text-base font-normal"></p>
            </div>
            <div className="method-info-box ">
              <p className="method-info text-base font-light text-[#9F9F9F] font-poppins">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="method-info-box ">
              <p className="method-info text-base font-light text-[#9F9F9F] font-poppins">
                Make your payment at your door at the time of delivery.
              </p>
            </div>
            
            <div className="methods flex flex-col gap-5 mt-1">
              <div className="payment-input-box flex items-center gap-4 ">
                <input
                  className="h-[14px] w-[14px] accent-black cursor-pointer"
                  type="radio"
                  name="payment-method"
                  id="bank-transfer"
                />
                <label
                  htmlFor="bank-transfer"
                  className="text-base font-medium text-[#9F9F9F] cursor-pointer"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="payment-input-box flex items-center gap-4 cursor-pointer">
                <input
                  className="h-[14px] w-[14px] accent-black cursor-pointer"
                  type="radio"
                  name="payment-method"
                  id="cod"
                />
                <label
                  htmlFor="cod"
                  className="text-base font-medium text-[#9F9F9F] cursor-pointer font-poppins"
                >
                  Cash On Delivery
                </label>
              </div>
              <div className="notice-box flex flex-1">
                <p className="info font-light text-base font-poppins">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <a href="#" className="text-base font-semibold font-poppins">
                    privacy policy.
                  </a>
                </p>
              </div>
              <div className="place-order-box flex justify-center">
                <input
                  type="submit"
                  value="Place Order"
                  className="w-[318px] h-[64px] rounded-[15px] border-black cursor-pointer border-[2px] mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
);
}

export default CheckOut;
