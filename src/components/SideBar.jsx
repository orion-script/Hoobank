import React from "react";

function SideBar() {
  return (
    <div className="bg-gradient-to-r from-background via-gray-800 to-gray-700 text-white nav-bar absolute w-2/5 rounded-lg ml-44 hidden">
      <ul className="flex flex-col items-center py-5">
        <li className="cursor-pointer py-1">Home</li>
        <li className="cursor-pointer py-1">Features</li>
        <li className="cursor-pointer py-1">Product</li>
        <li className="cursor-pointer py-1">Clients</li>
      </ul>
    </div>
  );
}

export default SideBar;
