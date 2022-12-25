import React from "react";
import Robot from "../assets/robot.352cd501.png";
import ArrowUp from "../assets/arrow-up.3a6757a0.svg";
import Discount from "../assets/Discount.d2f25af1.svg";

function Payment() {
  return (
    <div className="bg-background text-white pt-10 md:pt-32 pb-10 w-full">
      <div className="md:flex md:flex-row justify-between w-full">
        <div className="md:flex md:flex-col md:w-2/5 md:pl-10">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center m-auto w-11/12 md:w-full rounded py-3 md:pl-5 my-4">
            <img src={Discount} alt="Discount" />
            <p className="ml-1">20% Discount For 1 Month Account</p>
          </div>
          <div className="font-bold text-6xl md:text-8xl py-3 text-center md:text-start">
            <p className="">
              The Next
              <span className="text-indigo-200"> Generation</span> Payment
              Method.
            </p>
          </div>
          <div className="font-bold text-xl text-center md:text-start py-3 text-indigo-200">
            <p className="">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div className="m-auto flex flex-col border-solid border-2 border-sky-500 rounded-full w-36 h-36 items-center mt-14 md:mt-32  animate-bounce">
          <div className="w-2/4 flex flex-col m-auto text-xl text-indigo-200">
            <div className="flex flex-row">
              <p>Get</p>
              <img src={ArrowUp} alt="ArrowUp" className="m-auto" />
            </div>
            <p className="m-auto">Started</p>
          </div>
        </div>
        <div className="md:w-2/5 h-auto py-10 md:py-5">
          <img src={Robot} alt="Robot" />
        </div>
      </div>
      <div className="w-full md:w-auto md:flex md:flex-row justify-around py-5">
        <div className="w-11/12 md:w-auto h-10 flex flex-row items-center m-auto">
          <span className="font-bold text-4xl">3800+</span>
          <p className="text-indigo-200 text-lg md:text-xl md:ml-2">
            USER ACTIVE
          </p>
        </div>
        <div className="w-11/12 md:w-auto h-10 flex flex-row items-center m-auto my-3 md:my-0">
          <span className="font-bold text-4xl">230+</span>
          <p className="text-indigo-200 text-lg md:text-xl md:ml-2">
            TRUSTED BY COMPANY
          </p>
        </div>
        <div className="w-11/12 md:w-auto h-10 flex flex-row items-center m-auto">
          <span className="font-bold text-4xl">$230M+</span>
          <p className="text-indigo-200 text-lg md:text-xl md:ml-2">
            TRANSACTION
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
