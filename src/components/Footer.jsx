import React from "react";
import PageLogo from "../assets/logo.05fd8c10.svg";
import instagram from "../assets/instagram.a43eb99f.svg";
import facebook from "../assets/facebook.eb48cee5.svg";
import twitter from "../assets/twitter.e90f35de.svg";
import linkedin from "../assets/linkedin.21f78aad.svg";

function Footer() {
  return (
    <div className="bg-background text-white pt-10">
      <div className="md:flex md:flex-row w-11/12 m-auto md:justify-between py-10">
        <div className="w-full pl-3 md:pl-0 md:w-2/4">
          <img src={PageLogo} alt="PageLogo" />
          <p className="w-full md:w-4/5 text-xl md:text-2xl text-indigo-200 pt-5">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="w-full pl-3 md:pl-0 py-4 md:py-0 md:w-1/5">
          <p className="font-bold text-2xl">Useful Links</p>
          <ul className="cursor-pointer text-xl text-indigo-200">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div className="w-full pl-3 md:pl-0 py-4 md:py-0 md:w-1/5">
          <p className="font-bold text-2xl">Community</p>
          <ul className="cursor-pointer text-xl text-indigo-200">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className="w-full pl-3 md:pl-0 py-4 md:py-0 md:w-1/6">
          <div className="md:w-4/5 md:m-auto">
            <p className="font-bold text-2xl">Partner</p>
            <ul className="cursor-pointer text-xl text-indigo-200">
              <li>Our Partner</li>
              <li>How it Works</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-11/12 m-auto my-8 h-px border-0 dark:bg-gray-700" />
      <div className="w-11/12 md:m-auto md:flex md:flex-row justify-between">
        <div className="fonf-bold text-lg text-center md:text-xl">
          <p>Copyright &copy; 2022 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex flex-row justify-around pt-5 cursor-pointer">
          <img src={instagram} alt="instagram" className="px-2" />
          <img src={facebook} alt="facebook" className="px-2" />
          <img src={twitter} alt="twitter" className="px-2" />
          <img src={linkedin} alt="linkedin" className="px-2" />
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        <p>
          Designed by{" "}
          <a
            className="text-indigo-200 text-base font-thin"
            // target_blank
            href="https://github.com/Hadestech01/"
          >
            HadesCodes
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
