import React from "react";
import card from "../assets/card.af071def.png";

function Card() {
  return (
    <div className="bg-background w-full text-white md:flex md:flex-row md:justify-between px-10 pt-10 md:pt-40 pb-10">
      <div className="md:w-2/5">
        <p className="font-bold text-2xl md:text-5xl py-5 md:py-10">
          Find a better card deal in few easy steps.
        </p>
        <p className="text-xl md:text-2xl py-7 text-indigo-200">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-indigo-300 rounded-lg mt-5 py-3 w-11/12 md:w-auto md:px-6 text-black content-center">
          Get Started
        </button>
      </div>
      <div className="md:w-2/5 pt-10">
        <img src={card} alt="card" />
      </div>
    </div>
  );
}

export default Card;
