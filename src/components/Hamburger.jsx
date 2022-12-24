import React from "react";

function Hamburger() {
  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white h-auto w-2/5 rounded-lg text-center absolute hidden hamburger">
        <ul className="py-3">
          <li className="cursor-pointer py-1">Home</li>
          <li className="cursor-pointer py-1">Features</li>
          <li className="cursor-pointer py-1">Product</li>
          <li className="cursor-pointer py-1">Clients</li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
