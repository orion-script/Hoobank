import React from "react";

function Service() {
  return (
    <div className="bg-background w-full h-auto py-5 text-white">
      <div className="bg-back w-11/12 m-auto rounded-2xl py-10 ">
        <div className="md:flex md:flex-row justify-between w-11/12 m-auto">
          <div className="md:w-2/4">
            <p className="font-bold text-4xl md:text-5xl py-5">
              Let’s try our service now!
            </p>
            <p className="text-xl md:text-2xl text-indigo-200 pb-5">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <div className="md:w-1/5 h-10 my-auto">
            <button className="bg-indigo-300 rounded-lg py-3 w-11/12 md:w-3/5 md:px-6 text-black content-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
