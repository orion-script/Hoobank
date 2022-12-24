import React from "react";
import PageLogo from "../assets/logo.05fd8c10.svg";
import Menu from "../assets/menu.svg";
import Closed from "../assets/close.svg";

function Navbar() {
  const showNavbar = () => {
    const navBar = document.querySelector(".nav-bar");
    const hamButton = document.querySelector(".hamButton");
    const closeBtn = document.querySelector(".close-Btn");

    navBar.classList.remove("hidden");
    hamButton.classList.add("hidden");
    closeBtn.classList.remove("hidden");
  };

  const hideNavbar = () => {
    const navBar = document.querySelector(".nav-bar");
    const hamButton = document.querySelector(".hamButton");
    const closeBtn = document.querySelector(".close-Btn");

    navBar.classList.add("hidden");
    closeBtn.classList.add("hidden");
    hamButton.classList.remove("hidden");
  };

  return (
    <div className="">
      <nav className="w-full sticky top-0 z-50">
        <div className="bg-background text-white flex md:flex-row w-full h-auto justify-between items-center py-5 sticky top-0 z-50">
          <div className="pl-5 md:pl-10 w-2/4 md:w-1/5">
            <img
              src={PageLogo}
              alt={PageLogo}
              className="h-7 md:h-10 cursor-pointer"
            />
          </div>
          <div className="w-1/6 md:w-2/5">
            <ul className="hidden md:flex flex-row justify-around w-full">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Product</li>
              <li className="cursor-pointer">Clients</li>
            </ul>
            <img
              src={Menu}
              alt="Menu"
              className="md:hidden animate-pulse hamButton"
              onClick={showNavbar}
            />
            <img
              src={Closed}
              alt="Closed"
              className="hidden close-Btn"
              onClick={hideNavbar}
            />
          </div>
        </div>
      </nav>
      <div className="bg-background text-white nav-bar hidden">
        <ul className="flex flex-col w-full h-screen items-center py-10">
          <li className="cursor-pointer py-1">Home</li>
          <li className="cursor-pointer py-1">Features</li>
          <li className="cursor-pointer py-1">Product</li>
          <li className="cursor-pointer py-1">Clients</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
