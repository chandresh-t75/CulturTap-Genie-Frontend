import React, { useEffect } from "react";
import "../../index.css";
import { useLocation } from "react-router-dom";
import Genie from "../../assets/navbar/Genie-Business.svg"
import PlayStore from "../../assets/navbar/playStore.svg"
import AppStore from "../../assets/navbar/appStore.svg"


const Earn = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.search);
    if (location.search.includes("termandcondition")) {
      console.log("location");
      window.scrollTo({
        top: 1300,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:ml-[180px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px] md:text-[32px] xl:text-[38px] heading-color font-extrabold  max-sm:text-[28px]">
          Earn with us!
        </h1>
      </div>
      <div className="w-full flex flex-col  md:mt-[30px]  ">
        <div className="">
          <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
            An app for people who already have a small business entity (Such as
            shops, Stores, or Warehouses ), maintenance workers( Plumbers,
            electricians, carpenters etc) or Do you want to start a new small
            business? The CulturTap Genie business app is mission-oriented to
            promote small businesses, creating a healthy ecosystem for retailers
            and service providers to punch up their sales and attract more
            customers. Engage with real customers through bargaining on the
            Culturtap Genie Business app. Download the app now & grow more.  
          </p>
          <p className=" text-[16px]  xl:text-[18px] font-extrabold mt-6 ">
            Why Choose CulturTap Genie Business? 
          </p>
          <div className="flex flex-col mt-[20px]">
            <p className="text-[14px] md:text-[16px] xl:text-[16px] ">
              <span className=" text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                Visionary Approach:{" "}
              </span>
              Promote your small business and thrive in a vibrant retail and
              service community.
            </p>
            <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
              <span className="text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                Real-Time Bargaining:{" "}
              </span>
              Engage directly with customers through our innovative bargaining
              platform.
            </p>
            <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
              <span className=" text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                Business Growth:{" "}
              </span>
              Attract more customers and watch your business flourish!
            </p>
          </div>
        </div>
        <div className="">
          <p className=" text-[16px]  xl:text-[18px] font-extrabold mt-6 ">
            How It Works: 
          </p>
          <div className="flex flex-col mt-[20px]">
            <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
              <span className=" text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                1. Receive Notifications:{" "}
              </span>{" "}
              You'll get notified about what the customer needs. For example: “I
              need to replace my laptop charger, expecting price Rs. 1230.”
            </p>
            <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
              <span className=" text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                2. Accept Requests:{" "}
              </span>{" "}
              If you have products or services available, please proceed to
              accept the customer's request.
            </p>
            <p className=" text-[14px] md:text-[16px] xl:text-[16px]">
              <span className=" text-[14px] md:text-[16px] xl:text-[16px] font-semibold">
                3. Offer best price to attract more customers:{" "}
              </span>{" "}
              Ask for more details, share product references, & offer a best
              price for products & services.
            </p>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col mt-[20px]">
            <li className=" text-[14px] xl:text-[16px]">
              Feel free to send queries to ask for more references if you need a
              better understanding of the customer's needs. For bargaining
              offers, please confirm product availability with images and send
              your offer to start bargaining.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <div className="flex max-sm:flex-col flex-row  items-center gap-[10px] border-[1px] w-max p-[20px] border-[#FB8C00]">
          <img src={Genie} alt="logo" className=' w-[120px] h-[80px] xl:w-[102px] xl:h-[102px]' />
          <div className="flex flex-col gap-2">
            <p className=" text-[12px] md:text-[14px] xl:text-[14px] font-bold max-sm:text-center">Download the Business App</p>
            <div className="flex flex-row gap-[6px]">
            <a href="#" className=" cursor-pointer">
            <img
              src={AppStore}
              alt="logo"
              loading="lazy"
              width="120px"
              height="44px"
            />
          </a>
          <a href="#" className="cursor-pointer ">
            <img
              src={PlayStore}
              alt="logo"
              loading="lazy"
              width="120px"
              height="44px"
            />
          </a>
            </div>
          </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
