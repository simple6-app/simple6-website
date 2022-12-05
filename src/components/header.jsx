import React from "react";
import logo from "../assets/img/logo-icon.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 px-5 py-8 bg-white/40 backdrop-blur-2xl lg:px-10 ">
      <nav className="flex items-center justify-between">
        <div className="">
          <a href="/" className="flex items-center space-x-2.5">
            <img src={logo} alt="logo icon" className="h-8" />
          </a>
        </div>
      </nav>
    </header>
  );
};
