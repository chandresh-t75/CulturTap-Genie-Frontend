import React, { useEffect } from "react";
import earning1 from "../../assets/earnings/earning1.svg";
import earning2 from "../../assets/earnings/earning2.svg";
import "../../index.css";
import { useLocation } from "react-router-dom";

const TermsAndConditons = () => {
 

  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:ml-[180px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px] md:text-[32px] xl:text-[38px] heading-color font-extrabold  max-sm:text-[28px]">
          Terms & Conditions *
        </h1>
      </div>
      <div className="w-full flex flex-col  md:mt-[30px]  ">
        <div className="mt-[20px]">
          <p className="text-[16px] md:text-[18px] font-bold">For Customers</p>
          <ul className="flex flex-col mt-[20px]">
  <li className="flex text-[14px] md:text-[16px] before:content-['*'] before:mr-2">
  First time user will get 5 spades free ! After that, each spade will cost 20 rupees.
  </li>
  <li className="flex text-[14px] md:text-[16px] before:content-['*'] before:mr-2">
  If the shopkeepers don't accept your request, there won't be any charge.
  </li>
  <li className="flex text-[14px] md:text-[16px] before:content-['*'] before:mr-2">
  If you encounter any issues, please report your concerns to us.
  </li>
  <li className="flex text-[14px] md:text-[16px] before:content-['*'] before:mr-2">
  Shopkeepers will list their store for home delivery, You can choose specific shops or service providers based on your delivery requirements.
  </li>
</ul>

        </div>
        <div className="mt-[20px]">
          <p className="text-[16px] md:text-[18px] font-bold">For Retailers</p>
          <ul className="flex flex-col mt-[20px] ">
            <li className=" text-[14px] md:text-[16px] before:content-['*']  before:mr-2">
                <span className="text-[14px] md:text-[16px] font-bold">Integrity First: </span>
            Only accept requests if the product is available. Honesty builds trust.
            </li>
            <li className=" text-[14px] md:text-[16px] before:content-['*']  before:mr-2">
            <span className="text-[14px] md:text-[16px] font-bold">Ethics Matter: </span>
             Authenticity and ethics are crucial. Misconduct can lead to account suspension or penalties.
             We've got your back!
            </li>
            <li className=" text-[14px] md:text-[16px] before:content-['*']  before:mr-2">
            Share your business ideas with us, and we'll help you categories and promote them. Together, we'll attract more customers!
            </li>
            <li className=" text-[14px] md:text-[16px] before:content-['*']  before:mr-2">
            If you encounter any issues, please report your concerns to us.
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditons;
