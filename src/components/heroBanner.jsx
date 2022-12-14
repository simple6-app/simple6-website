import React from "react";
import screenOnboarding from "../assets/img/screen-onboarding.png";
import { ActionButtons } from "../components";

export const HeroBanner = () => {
  return (
    <section className="md:mt-8 sm:mt-3 lg:mt-28">
      <div className="flex flex-col items-center space-y-8 text-center">
        <h1 className="text-4xl font-medium sm:text-5xl  gradient-text">
          The world's simplest and most effective task management application
        </h1>
        <ActionButtons />
      </div>
      <div className="mt-20 sm:w-[396px] sm:mx-auto">
        <img
          src={screenOnboarding}
          alt="simple6"
          className="w-full h-full drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
