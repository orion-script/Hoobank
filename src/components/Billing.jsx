import React from "react";
import bill from "../assets/bill.fd47dad8.png";
import apple from "../assets/apple.19b1a6ee.svg";
import google from "../assets/google.9c71b07f.svg";

function Billing() {
  return (
    <div className="bg-background text-white w-full md:flex md:flex-row md:justify-between md:px-10">
      <div className="w-11/12 md:w-2/5 m-auto md:m-0">
        <img src={bill} alt="bill" className="w-full" />
      </div>
      <div className="w-11/12 md:w-2/5 m-auto md:m-0">
        <p className="w-full font-bold text-3xl md:text-6xl mb-4">
          Easily control your billing & invoicing
        </p>
        <p className="w-11/12 text-xl md:text-3xl py-4 text-indigo-200">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="w-11/12 flex flex-row justify-around py-4">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" className="ml-3" />
        </div>
      </div>
    </div>
  );
}

export default Billing;
