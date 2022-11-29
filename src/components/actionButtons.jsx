import React from "react";
import { AppleIcon, GoogleIcon } from "../assets/svg";

export const ActionButtons = () => {
  return (
    <div className="flex space-x-2.5">
      <a
        href="#0"
        className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-gray-900 rounded-lg hover:bg-purple-600"
      >
        <span>
          <AppleIcon />
        </span>
        <span>AppStore</span>
      </a>
      <a
        href="#0"
        className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-gray-900 rounded-lg hover:bg-purple-600"
      >
        <span>
          <GoogleIcon />
        </span>
        <span>Google Play</span>
      </a>
    </div>
  );
};
