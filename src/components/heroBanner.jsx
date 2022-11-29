import React from "react";
import iphone from "../assets/img/iphone.png";
import { AppleIcon, GoogleIcon } from "../assets/svg";

export const HeroBanner = () => {
  return (
    <section>
      <div className="flex flex-col items-center space-y-8 text-center">
        <h1 className="text-4xl font-medium sm:text-5xl">
          The worlds simplest and effective task management application
        </h1>
        <p className="max-w-sm text-xl text-gray-500">
          The Daily Routine Experts Recommend for Peak Productivity
        </p>
        <div className="flex space-x-2.5">
          <a
            href="#0"
            className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600"
          >
            <span>
              <AppleIcon />
            </span>
            <span>AppStore</span>
          </a>
          <a
            href="#0"
            className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600"
          >
            <span>
              <GoogleIcon />
            </span>
            <span>Google Play</span>
          </a>
        </div>
      </div>
      <div className="mt-20 sm:w-[396px] sm:mx-auto">
        <img
          src={iphone}
          alt="iphone"
          className="w-full h-full drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
