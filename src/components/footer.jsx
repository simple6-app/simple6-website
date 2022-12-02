import React from "react";
import logo from "../assets/img/logo-icon.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-10 space-y-8">
      <div className="flex flex-col items-center space-y-3 font-medium text-gray-400 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-8">
        <a href="#0" className="hover:text-blue-600">
          Privacy Policy
        </a>
        <a href="#0" className="hover:text-blue-600">
          Terms
        </a>
        <a href="mailto:hi@simple6.app" className="hover:text-blue-600">
          Contact us
        </a>
      </div>
      <img src={logo} alt="logo icon" className=" h-8" />
    </footer>
  );
};
