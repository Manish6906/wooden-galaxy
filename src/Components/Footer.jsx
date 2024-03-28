import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 lg:text-left px-[5%]">
      {/* <div className="flex items-center justify-between flex-wrap border-neutral-200 p-6 lg:justify-between">
        Content
      </div> */}

      <div className="mx-6 py-10 md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-4">
          {/* Section 1 */}
          <div className="">
            <h6 className="mb-4 italic font-ABeeZee font-normal text-[#1E1E1E] leading-[33px] text-[28px] pb-3 lg:text-left">
              Wooden Galaxy
            </h6>
            <p className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]">
              Welcome to Wooden Galaxy, where craftsmanship meets innovation.
              Discover timeless furniture pieces tailored to your style, only a
              tap away.
            </p>
          </div>

        <div className="grid lg:grid-cols-3 justify-center md:col-span-3 md:ml-[15%] md:justify-between">
            {/* Section 2 */}
            <div className="flex justify-start flex-col">
            <h6 className="mb-4 font-normal text-[17px] font-DM leading-[22px] text-[#F6973F]">
              Services
            </h6>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Email"}>Email Marketing</Link>
            </p>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Campaigns"}>Campaigns</Link>
            </p>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Branding"}>Branding</Link>
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col justify-center ">
            <h6 className="mb-4 font-normal text-[17px] font-DM leading-[22px] text-[#F6973F]">Furniture</h6>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Beds"}>Beds</Link>
            </p>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Chair"}>Chair</Link>
            </p>
            <p className="mb-4">
              <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/All"}>All</Link>
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col justify-center "
          >
            <h6 className="mb-4 font-normal text-[17px] font-DM leading-[22px] text-[#F6973F]">Follow Us</h6>
            <div className="w-fit">
              <p className="mb-4 font-semibold text-[#1E1E1E] flex justify-start items-center">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.7357 3.29509H10.5851V0.139742C10.2661 0.0967442 9.16872 0 7.89075 0C5.22424 0 3.39761 1.643 3.39761 4.66274V7.44186H0.455078V10.9693H3.39761V19.845H7.00529V10.9701H9.82881L10.277 7.44269H7.00445V5.01251C7.00529 3.99297 7.28553 3.29509 8.7357 3.29509Z"
                      fill="#1E2833"
                    />
                  </svg>
                </span>

                <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Facebook"}>Facebook</Link>
              </p>
              <p
                className="mb-4 font-semibold text-[#1E1E1E] flex 
w-full
justify-start items-center"
              >
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2755 2.63756C19.5331 2.97175 18.7421 3.19327 17.9173 3.30082C18.7658 2.78097 19.4133 1.96406 19.7177 0.979415C18.9267 1.46342 18.0533 1.80529 17.1226 1.99607C16.3715 1.17532 15.3009 0.666992 14.1331 0.666992C11.8673 0.666992 10.0432 2.55434 10.0432 4.86806C10.0432 5.20097 10.0706 5.52108 10.138 5.82582C6.73558 5.65552 3.72492 3.98201 1.70242 1.43269C1.34933 2.06137 1.14221 2.78097 1.14221 3.55563C1.14221 5.01019 1.87211 6.29957 2.96009 7.04606C2.30256 7.03326 1.6575 6.83735 1.11102 6.52877C1.11102 6.54157 1.11102 6.55822 1.11102 6.57486C1.11102 8.61586 2.52964 10.3111 4.38994 10.7017C4.0568 10.7951 3.69373 10.84 3.31693 10.84C3.05491 10.84 2.7904 10.8246 2.54211 10.7683C3.07238 12.4315 4.57709 13.6543 6.36627 13.694C4.97385 14.8118 3.20588 15.4853 1.29193 15.4853C0.956306 15.4853 0.634403 15.47 0.3125 15.4277C2.12539 16.6275 4.2739 17.3125 6.59085 17.3125C14.1219 17.3125 18.2392 10.9104 18.2392 5.36102C18.2392 5.17536 18.233 4.9961 18.2243 4.81812C19.0365 4.22657 19.719 3.48776 20.2755 2.63756Z"
                      fill="#1E2833"
                    />
                  </svg>
                </span>

                <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Twitter"}>Twitter</Link>
              </p>
              <p className="mb-4 font-semibold text-[#1E1E1E ] flex  items-start justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.71322 0.428711H14.3695C17.8926 0.428711 20.7497 3.36073 20.7497 6.97633V14.8335C20.7497 18.4491 17.8926 21.3811 14.3695 21.3811H6.71322C3.19006 21.3811 0.333008 18.4491 0.333008 14.8335V6.97633C0.333008 3.36073 3.19006 0.428711 6.71322 0.428711ZM14.3695 19.4168C16.8322 19.4168 18.8356 17.3609 18.8356 14.8335V6.97633C18.8356 4.44895 16.8322 2.393 14.3695 2.393H6.71322C4.25046 2.393 2.24707 4.44895 2.24707 6.97633V14.8335C2.24707 17.3609 4.25046 19.4168 6.71322 19.4168H14.3695Z"
                      fill="#1E2833"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.4375 10.9051C5.4375 8.01235 7.72289 5.66699 10.5417 5.66699C13.3604 5.66699 15.6458 8.01235 15.6458 10.9051C15.6458 13.7978 13.3604 16.1432 10.5417 16.1432C7.72289 16.1432 5.4375 13.7978 5.4375 10.9051ZM7.35156 10.9051C7.35156 12.7096 8.78328 14.1789 10.5417 14.1789C12.3001 14.1789 13.7318 12.7096 13.7318 10.9051C13.7318 9.09925 12.3001 7.63128 10.5417 7.63128C8.78328 7.63128 7.35156 9.09925 7.35156 10.9051Z"
                      fill="#1E2833"
                    />
                    <ellipse
                      cx="16.0288"
                      cy="5.27415"
                      rx="0.68013"
                      ry="0.697976"
                      fill="#1E2833"
                    />
                  </svg>
                </span>
                <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Instagram"}>Instagram</Link>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="lg:p-6 p-2 lg:text-end flex lg:justify-end justify-between lg:mr-24">
        <span className="md:mx-16 mx-4 font-semibold text-[#1E1E1E]">
          <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Terms & Conditions"}>Terms & Conditions</Link>
        </span>
        <p className="font-semibold text-[#1E1E1E] mr-10">
          <Link className="font-extrabold text-[15px] leading-6 font-abhaya-libre text-[#1E1E1E]" to={"/Privacy Policy"}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
