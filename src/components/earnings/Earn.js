import React, { useEffect } from "react";
import "../../index.css";
import { useLocation } from "react-router-dom";

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
        <h1 className="text-[38px] heading-color font-extrabold  max-sm:text-[28px]">
          Earn with us!
        </h1>
      </div>
      <div className="w-full flex flex-col  md:mt-[30px]  ">
        <div className="">
          <p className="text-[14px] md:text-[18px]">
            Welcome to CulturTap Genie Business, the essential app for small
            business owners and maintenance workers, including plumbers,
            electricians, carpenters, and more. Whether you manage a shop, or
            warehouse, or are launching a new venture, this app is your key to
            boosting sales and attracting more customers.
          </p>
          <p className="text-[14px] md:text-[18px] mt-6 ">
            Why Choose CulturTap Genie Business? 
          </p>
          <div className="flex flex-col mt-[20px]">
            <p className="text-[14px] md:text-[18px]  ">
              {" "}
              <span className="text-[14px] md:text-[18px] font-bold">
                Visionary Approach:{" "}
              </span>
              Promote Your Small Business and Thrive in a Vibrant Retail and
              Service Community.
            </p>
            <p className="text-[14px] md:text-[18px] ">
              <span className="text-[14px] md:text-[18px] font-bold">
                Real-Time Bargaining:{" "}
              </span>
              Engage directly with customers through our innovative bargaining
              platform.
            </p>
            <p className="text-[14px] md:text-[18px]  ">
              <span className="text-[14px] md:text-[18px] font-bold">
                Business Growth:{" "}
              </span>
              Attract more customers and watch your business flourish!
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-[14px] md:text-[18px] mt-6 ">How It Works: </p>
          <div className="flex flex-col mt-[20px]">
            <p className="text-[14px] md:text-[18px]  ">
              {" "}
              <span className="text-[14px] md:text-[18px] font-bold">
                1. Receive Notifications:{" "}
              </span>{" "}
              Get notified with a message and image of the customer's needs. For
              example: “I need to replace my laptop charger, expecting price Rs.
              1230.”
            </p>
            <p className="text-[14px] md:text-[18px] ">
              <span className="text-[14px] md:text-[18px] font-bold">
                2. Accept Requests:{" "}
              </span>{" "}
              If you have products or services available, please proceed to
              accept the customer's request.
            </p>
            <p className="text-[14px] md:text-[18px]  ">
              <span className="text-[14px] md:text-[18px] font-bold">
                3. Interest and Negotiate{" "}
              </span>
              Send queries for more details, attach product & store references,
              or create a new bid for bargaining.
            </p>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col mt-[20px] list-disc pl-5">
            <li className="text-[14px] md:text-[18px]">
              Feel free to send queries to ask for more references if you need a
              better understanding of the customer's needs.
            </li>
            <li className="text-[14px] md:text-[18px]">
              For bargaining bids: confirm product availability with images and
              send your bids to start bargaining.
            </li>
          </ul>
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] md:text-[18px] font-bold">
            How to Send a Bid:
          </p>
          <ol className="flex flex-col mt-[20px] list-decimal pl-5">
            <li className="text-[14px] md:text-[18px] marker:font-bold">
            Type Your Response: Enter your response or query.
            </li>
            <li className="text-[14px] md:text-[18px] marker:font-bold">
            Snap Product Image: Click a real product image for matching and availability.
            </li>
            <li className="text-[14px] md:text-[18px] marker:font-bold">
            Offer Your Price: Type your offered price to the customer.
            </li>
            <li className="text-[14px] md:text-[18px] marker:font-bold">
            Preview and Send: Review your bid and send it.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Earn;
