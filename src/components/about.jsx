import React from "react";
import iphone from "../assets/img/iphone.png";
import { AppleIcon, GoogleIcon } from "../assets/svg";

export const About = () => {
  return (
    <section>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="max-w-lg md:col-span-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-medium sm:text-5xl">About app</h2>
            <div className="space-y-4 text-lg text-gray-500">
              <p>
                In the New-York Times bestseller book, Atomic Habits, which has
                sold more than 9 million copies worldwide, is described very
                simple task managment methodology invented by The Ivy Lee
                Method. (
              </p>

              <p>
                Method of prioritizing your to-do list seems stupidly simple.
                Here's what makes it so effective:
              </p>

              <ul>
                <li>
                  It's simple enough to actually work - Use simple rules to
                  guide complex behavior.
                </li>
                <li>
                  It forces you to make tough decisions - trim away everything
                  that isn't absolutely necessary
                </li>
                <li>
                  It removes the friction of starting - forces you to decide on
                  your first task the night before you go to work
                </li>
                <li>
                  It requires you to single-task - Method will force you to
                  focus at one task at the time
                </li>
              </ul>
              <p>
                {" "}
                Read more about Method and the inspiring{" "}
                <a href="https://jamesclear.com/ivy-lee">story of Ivy Lee </a>)
              </p>
            </div>
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
        </div>
        <div>
          <img
            src={iphone}
            alt="iphone"
            className="w-full h-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
