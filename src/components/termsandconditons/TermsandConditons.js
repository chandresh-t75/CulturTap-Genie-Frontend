import React, { useEffect } from "react";
import earning1 from "../../assets/earnings/earning1.svg";
import earning2 from "../../assets/earnings/earning2.svg";
import "../../index.css";
import { useLocation } from "react-router-dom";
import Customer from "../../assets/termsandconditions/Customer.svg"
import Retailer from "../../assets/termsandconditions/Retailer.svg"
import Star from "../../assets/termsandconditions/star.svg"




const TermsAndConditons = () => {
  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:ml-[120px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px]  text-[#2E2C43] poppins-black  max-sm:text-[28px]">
          Terms & Conditions*
        </h1>
      </div>
      <div className="w-full flex flex-col gap-[40px] mt-[20px]  md:mt-[30px]  ">
      <div className="flex flex-1 max-sm:justify-center">
            <img
              src={Customer}
              alt="contact"
              className="w-[196px] h-[152px]   "
            />
          </div>
        <div className="">
          <p className="text-[20px]  poppins-extrabold text-[#2E2C43]">For Customers</p>
          <ul className="flex flex-col mt-[20px]">
            <li className="flex text-[14px]   poppins-regular text-[#001B33]">
              <span>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mt-[5px]   mr-4"
            />
          
              </span>
                Your first 5 spades are free! After that, each spade will cost 20 rupees.
            </li>
            <li className="flex text-[14px]  poppins-regular text-[#001B33]">
              <span>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mt-[5px]  mr-4 "
            />
              </span>
              If the shopkeepers don't accept your request, there won't be any charge.
            </li>
            <li className="flex text-[14px] poppins-regular text-[#001B33]">
              <span>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mt-[5px]  mr-4  "
            />
              </span>
              If you encounter any issues, please report your concerns to us.
            </li>
            <li className="flex text-[14px]   poppins-regular text-[#001B33]">
              <span>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px]  mt-[5px] mr-4 "
            />
              </span>{" "}
              Shopkeepers will list their store for home delivery, You can choose specific shops or service providers based on your delivery requirements.
            </li>
          </ul>
        </div>
        <div className="flex flex-1 max-sm:justify-center">
            <img
              src={Retailer}
              alt="contact"
              className="w-[196px] h-[152px]   "
            />
          </div>
        <div className="">
          <p className="text-[20px] poppins-extrabold text-[#2E2C43]">For Retailers</p>
          <ul className="flex flex-col mt-[20px] ">
          <li className="text-[14px]  poppins-regular text-[#001B33]">
             <div className="flex flex-row">
             <p>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mr-4 mt-[5px]"
            />
            </p>
              <p><b className="mr-1">Do's: </b>Only accept customer requests if you have the product available. Authenticity and honesty are crucial to us and our customers.

              </p>

             </div>
              
            </li>
            <li className="text-[14px]  poppins-regular text-[#001B33]">
             <div className="flex flex-row">
             <p>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mr-4 mt-[5px]"
            />
            </p>
              <p><b className="mr-1">Don'ts: </b>Customer complaints may lead to a permanent account block or a significant penalty to unlock the account.
              </p>

             </div>
              
            </li>
            <li className="text-[14px]  poppins-regular text-[#001B33]">
             <div className="flex flex-row">
             <p>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mr-4 mt-[5px]"
            />
            </p>
              <p><b className="mr-1">Support: </b>Tell us what you want to start as a new small business, and we'll create your business category on our platform. 
              </p>

             </div>
              
            </li>
            <li className="text-[14px]  poppins-regular text-[#001B33]">
             <div className="flex flex-row">
             <p>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mr-4 mt-[5px]"
            />
            </p>
              <p><b className="mr-1">Grow Your Business: </b>We will help you attract and keep customers.
              </p>

             </div>
              
            </li>
            <li className="flex flex-row text-[14px]   poppins-regular text-[#001B33]">
              <span>
              <img
              src={Star}
              alt="contact"
              className="w-[10px] h-[10px] mt-[5px]  mr-4"
            />
              </span>
              CulturTap Genie business app is free for now, but there will be fewer charges like 100 rupees for 100 customers soon.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditons;
