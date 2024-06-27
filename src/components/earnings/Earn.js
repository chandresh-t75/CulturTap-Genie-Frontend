import React, { useEffect } from "react";
import "../../index.css";
import { useLocation } from "react-router-dom";
import Genie from "../../assets/navbar/Genie-Business.svg";
import PlayStore from "../../assets/navbar/playStore.svg";
import AppStore from "../../assets/navbar/appStore.svg";
import earn from "../../assets/earnings/earn.svg";

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
        <h1 className="text-[28px]  heading-color  max-sm:text-[28px] poppins-black">
          Earn with us!
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-[20px] gap-10  md:mt-[30px]  ">
        <div className="lg:w-[50%] flex flex-col  ">
          <div className="">
            <p className=" text-[14px] poppins-regular">
              An application designed for individuals who own small businesses
              such as shops, stores, and warehouses, as well as for maintenance
              professionals such as plumbers, electricians, carpenters, and
              others in similar trades. This app is also suitable for aspiring
              people looking to start a new small business. The CulturTap Genie
              Business app boosts small businesses, creating a supportive
              ecosystem for shops and maintenance workers to attract more & more
              customers to increase sales exponentially. Engage with real
              customers through bargaining on the CulturTap Genie Business app. 
            </p>
            <p className=" text-[14px]    mt-6 poppins-bold ">
              How Does CulturTap Genie Business App Work?
            </p>
            <div className="flex flex-col mt-[20px] gap-2">
              <p className="text-[14px] poppins-regular  ">
                Ready to connect with customers online like never before? The
                Genie is here to help. Shopkeepers can capture customer’s
                attention by offering the best price for shopping list items &
                services.
              </p>
              <p className="text-[14px] poppins-regular ">
                <span className=" text-[14px] poppins-semibold">
                  1. Recieve Notifications:{" "}
                </span>
                You will receive notifications with a message and product images
                with the customer’s expected price. 
              </p>
              <p className="text-[14px] poppins-regular ml-4">
                • Example: "I need to replace my laptop charger, Expected Price:
                1230 Rs"
              </p>

              <p className=" text-[14px] poppins-regular">
                <span className="text-[14px] poppins-semibold">
                  2. Accept Requests:{" "}
                </span>
                If you have the right product or service availability, you can
                accept the customer's request. 
              </p>
              <p className="text-[14px] poppins-regular">
                <span className=" text-[14px]  poppins-semibold">
                  3. Send an Offer or Query:{" "}
                </span>
                You can ask for more details about the product, send product
                attachments, & create a new offer. 
              </p>
              <div className="flex flex-col ml-4">
                <p className="text-[14px] poppins-regular">
                  <span className=" text-[14px]  poppins-semibold">
                    • Send Query:{" "}
                  </span>
                  If you don't understand the customer's needs, ask for more
                  details.  
                </p>
                <p className="text-[14px] poppins-regular">
                  <span className=" text-[14px]  poppins-semibold">
                    • Send an Offer:{" "}
                  </span>
                  Send an offer with the image references to confirm product
                  availability with the offered price & warranty.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className=" text-[14px]  poppins-bold mt-8 ">
              How to Send an Offer to the Customer?
            </p>
            <div className="flex flex-col mt-[10px]">
              <p className=" text-[14px] poppins-regular">
                Step 1. Type your response first. 
              </p>
              <p className=" text-[14px] poppins-regular">
                Step 2. Click a real product image for the right match and
                availability.
              </p>
              <p className=" text-[14px] poppins-regular">
                Step 3. Type your offered price and product warranty.
              </p>
              <p className=" text-[14px] poppins-regular">
                Step 4. Preview & send your offer. 
              </p>
            </div>
          </div>
        </div>
      
        <div className="lg:w-[50%] flex justify-center">
          <div className="flex flex-1 justify-center  lg:mt-6">
            <img
              src={earn}
              alt="contact"
              className="w-[300px] h-[350px] lg:w-[500px] lg:h-[593px]  "
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-6 w-full flex-row justify-center items-center">
        <div className="flex max-sm:flex-col flex-row justify-center  items-center gap-[10px] border-[1px] w-max p-[20px] border-[#FB8C00]">
          <img
            src={Genie}
            alt="logo"
            className=" w-[120px] h-[80px] xl:w-[102px] xl:h-[102px]"
          />
          <div className="flex flex-col gap-2">
            <p className=" text-[12px] md:text-[14px] xl:text-[14px] font-bold max-sm:text-center">
              Download the Business App
            </p>
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
  );
};

export default Earn;
