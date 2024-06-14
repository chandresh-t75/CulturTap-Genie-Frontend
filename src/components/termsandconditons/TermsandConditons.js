import React, { useEffect } from "react";
import earning1 from "../../assets/earnings/earning1.svg";
import earning2 from "../../assets/earnings/earning2.svg";
import "../../index.css";
import { useLocation } from "react-router-dom";

const TermsAndConditons = () => {
 

  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:ml-[180px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[38px] heading-color font-extrabold  max-sm:text-[28px]">
          Terms & Conditions *
        </h1>
      </div>
      <div className="w-full flex flex-col  md:mt-[30px]  ">
        <div className="mt-[20px]">
          <p className="text-[18px] md:text-[20px] font-bold">For Customers</p>
          <ul className="flex flex-col mt-[20px]">
  <li className="flex text-[14px] md:text-[18px] before:content-['*'] before:mr-2">
    Each bargaining request costs 20 rupees.
  </li>
  <li className="flex text-[14px] md:text-[18px] before:content-['*'] before:mr-2">
    There are no charges for unresponded requests from retailers.
  </li>
  <li className="flex text-[14px] md:text-[18px] before:content-['*'] before:mr-2">
    For any issues, raise a help request or report your concerns.
  </li>
  <li className="flex text-[14px] md:text-[18px] before:content-['*'] before:mr-2">
    Retailers will list their stores for home delivery, and you can select particular retailers or service providers based on your delivery pattern.
  </li>
</ul>

        </div>
        <div className="mt-[20px]">
          <p className="text-[18px] md:text-[20px] font-bold">For Retailers</p>
          <ul className="flex flex-col mt-[20px] ">
            <li className=" text-[14px] md:text-[18px] before:content-['*']  before:mr-2">
                <span className="text-[14px] md:text-[18px] font-bold">Integrity First: </span>
            Only accept requests if the product is available. Honesty builds trust.
            </li>
            <li className=" text-[14px] md:text-[18px] before:content-['*']  before:mr-2">
            <span className="text-[14px] md:text-[18px] font-bold">Ethics Matter: </span>
             Authenticity and ethics are crucial. Misconduct can lead to account suspension or penalties.
     We've got your back!
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditons;
