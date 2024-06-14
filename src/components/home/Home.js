import React, { useState, useEffect, useRef } from "react";
import scroller1 from "../../assets/Home/scrollers/scroller1.svg";
import scroller2 from "../../assets/Home/scrollers/scroller2.svg";
import scroller3 from "../../assets/Home/scrollers/scroller3.svg";
import scroller4 from "../../assets/Home/scrollers/scroller4.svg";

import "../../index.css";

const Home = () => {
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroller = [
    {
      id: 1,
      link: scroller1,
      title: "Start your Adventure now!",
    },
    {
      id: 2,
      link: scroller2,
      title: "Explore Update, Guide & Earn!",
    },
    {
      id: 3,
      link: scroller3,
      title: "Earn by assisting nearby tourists!",
    },
    {
      id: 4,
      link: scroller4,
      title: "Let's explore this world together!",
    },
  ];



  const calculateActiveIndex = () => {
    const contentElement = contentRef.current ?? 0;
    const scrollLeft = contentElement.scrollLeft ?? 0;
    const containerWidth = 300;
    const totalWidth = contentElement.scrollWidth ?? 0;
    let newIndex;

    if (scrollLeft === 0) {
      newIndex = 0;
    } else if (scrollLeft + containerWidth >= totalWidth) {
      newIndex = 0;
    } else {
      newIndex = Math.floor(scrollLeft / containerWidth);
    }

    setActiveIndex(newIndex);
  };
  // Attach scroll event listener

  useEffect(() => {
    const handleScroll = () => {
      calculateActiveIndex();
    };

    const interval = setInterval(() => {
      const contentElement = contentRef.current;
      const containerWidth = contentElement.offsetWidth;
      const totalWidth = contentElement.scrollWidth;

      if (contentElement.scrollLeft + containerWidth >= totalWidth) {
        contentElement.scrollTo({
          left: 0,
          behavior: "auto",
        });
      } else {
        contentElement.scrollTo({
          left: contentElement.scrollLeft + 1,
          behavior: "auto",
        });
      }
    }, 20); // Adjust the interval as needed for desired scrolling speed

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      contentRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen md:mt-[60px] max-sm:pt-[100px] -z-50">
      <div className="pl-[10px] mr-[10px] mx-auto sm:pl-[50px] sm:pr-[20px] lg:pl-[197px] ">
        <div
          className="flex  gap-[50px]  overflow-x-scroll scrollbar-hidden"
          ref={contentRef}
        >
          {scroller.map((item, index) => (
            <div
              key={index}
              className={`w-[320px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[420px] lg:h-[360px] xl:w-[520px] xl:h-[400px] flex-shrink-0  md:shadow-slate-600 shadow-sm  m-2 mb-10 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="w-full h-full flex justify-center pt-[18px]">
                <img
                  src={item.link}
                  alt="culturtap-works"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bullet-points">
        {scroller.map((item, index) => (
          <div
            key={item.id}
            className={`bullet-point ${
              index === activeIndex
                ? "active-bullet transition-all duration-500"
                : ""
            }`}
            onClick={() => {
              const contentElement = contentRef.current;
              const containerWidth = `450px`;
              contentElement.scrollTo({
                left: index * containerWidth,
                behavior: "smooth",
              });
            }}
          ></div>
        ))}
      </div>

      <div className="w-full flex flex-col pl-[20px] pr-[20px] sm:pl-[50px] sm:pr-[30px] lg:pl-[200px] mt-[45px]">
        <h1 className="text-[38px] font-extrabold heading-color max-sm:text-[28px]">
          About Us !
        </h1>
      
      </div>

      <div className="w-screen flex flex-col  flex-wrap pl-[20px] pr-[20px] sm:pl-[50px] sm:pr-[30px] lg:pl-[200px] lg:pr-[40px] gap-[40px] my-10 max-lg:justify-center">
        <p className=" text-[18px]">A bargaining app! </p>
        <p className="flex justify-center items-center  text-[18px] ">
          
          Avail the best price for any product or service! Now
          bargaining is possible from your couch! There's no need to wander
          through markets anymore. CulturTap Genie offers everyone an easy place
          to bargain with nearby retailers & service providers. Start bargaining
          by choosing the right spade category. Reject, recreate, & accept bids
          until you're satisfied with the bargain price. Download the app now
          and start bargaining.
        </p>
      </div>
    </div>
  );
};

export default Home;
