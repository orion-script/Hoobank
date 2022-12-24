import React from "react";
import Star from "../assets/Star.8959abf3.svg";
import Shield from "../assets/Shield.7ebc2fb1.svg";
import Send from "../assets/Send.c59bfe58.svg";

function Bussiness() {
  return (
    <div className="bg-background text-white md:flex md:flex-row justify-between px-9 w-full py-5">
      <div className="w-11/12 md:w-2/4">
        <p className="font-bold text-3xl md:text-6xl my-4">
          You do the business, we’ll handle the money.
        </p>
        <p className="text-indigo-200 text-lg md:text-xl">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-indigo-300 rounded-lg mt-5 py-3 w-11/12 md:w-auto md:px-6 text-black content-center">
          Get Started
        </button>
      </div>
      <div className="md:w-2/5 w-11/12 py-5 md:py-0">
        <div className="w-full hover:bg-back rounded-lg flex flex-row items-center cursor-pointer mb-9">
          <div className="w-4/5 md:w-1/5 pr-2">
            <img src={Star} alt="Star" className="w-10/12 pl-1" />
          </div>
          <div className="">
            <span className="font-bold text-2xl">Rewards</span>
            <p className="text-lg text-indigo-200 pb-3">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="w-full hover:bg-back rounded-lg flex flex-row items-center cursor-pointer mb-9">
          <div className="w-4/5 md:w-1/5 pr-2">
            <img src={Shield} alt="Shield" className="w-10/12 pl-1" />
          </div>
          <div className="">
            <span className="font-bold text-2xl">100% Secured</span>
            <p className="text-lg text-indigo-200 pb-3">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="w-full hover:bg-back rounded-lg flex flex-row items-center cursor-pointer mb-9">
          <div className="w-4/5 md:w-1/5 pr-2">
            <img src={Send} alt="Send" className="w-10/12 pl-1" />
          </div>
          <div className="">
            <span className="font-bold text-2xl">Balance Transfer</span>
            <p className="text-lg text-indigo-200 pb-3">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bussiness;
