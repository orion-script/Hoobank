import React from "react";
import Quote from "../assets/quotes.1adb8266.svg";
import People1 from "../assets/people01.a772086b.png";
import People2 from "../assets/people02.ee8ce82b.png";
import People3 from "../assets/people03.d9f4f98a.png";

function Gallery() {
  return (
    <div className="bg-background text-white flex flex-col pt-20 ">
      <div className="md:flex md:flex-row md:justify-between md:w-full px-10 py-5">
        <p className="font-bold text-3xl md:text-6xl py-5 md:w-2/5">
          What People are saying about us
        </p>
        <p className="text-xl md:text-3xl md:w-2/5 text-indigo-200">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="md:flex md:flex-row justify-around md:11/12 md:m-auto">
        <div className="hover:bg-back rounded-lg my-10 h-auto md:flex md:flex-col md:w-3/12 mx-10 cursor-pointer">
          <img src={Quote} alt="Quote" className="m-auto py-7" />
          <p className="w-4/5 m-auto text-xl md:text-2xl py-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex flex-row w-11/12 md:w-4/5 items-center justify-around py-5 m-auto ">
            <img src={People1} alt="People1" className="w-3/12" />
            <div className="">
              <p className="font-bold text-xl md:text-2xl">Herman Jensen</p>
              <p className="text-indigo-200">Founder & Leader</p>
            </div>
          </div>
        </div>

        <div className="hover:bg-back rounded-lg my-10 h-auto md:flex md:flex-col md:w-3/12 mx-10 cursor-pointer">
          <img src={Quote} alt="Quote" className="m-auto py-7" />
          <p className="w-4/5 m-auto text-xl md:text-2xl py-5">
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="flex flex-row w-11/12 md:w-4/5 items-center justify-around py-5 m-auto ">
            <img src={People2} alt="People2" className="w-3/12" />
            <div className="">
              <p className="font-bold text-xl md:text-2xl">Steve Mark</p>
              <p className="text-indigo-200">Founder & Leader</p>
            </div>
          </div>
        </div>

        <div className="hover:bg-back rounded-lg my-10 h-auto md:flex md:flex-col md:w-3/12 mx-10 cursor-pointer">
          <img src={Quote} alt="Quote" className="m-auto py-7" />
          <p className="w-4/5 m-auto text-xl md:text-2xl py-5">
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="flex flex-row w-11/12 md:w-4/5 items-center justify-around py-5 m-auto ">
            <img src={People3} alt="People3" className="w-3/12" />
            <div className="">
              <p className="font-bold text-xl md:text-2xl">Kenn Gallagher</p>
              <p className="text-indigo-200">Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
