import React from "react";
import screenToday from "../assets/img/screen-today.png";
import { ActionButtons } from "../components";

export const About = () => {
  return (
    <section>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="max-w-lg md:col-span-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-medium sm:text-5xl">About app</h2>
            <div className="space-y-4 text-lg text-gray-500">
              <p>
                The New York Times bestseller book{" "}
                <a
                  target={"_blank"}
                  href="https://jamesclear.com/atomic-habits"
                >
                  Atomic Habits
                </a>
                , which has sold more than 9 million copies worldwide, described
                a very simple task management methodology invented by{" "}
                <span className="font-semibold">Ivy Lee</span>.
              </p>

              <p>
                The method of prioritizing your to-do list seems stupidly
                simple. Here's what makes it so effective:
              </p>

              <ul className="list-disc pl-4">
                <li>
                  <span className="font-bold">
                    It's simple enough to actually work
                  </span>{" "}
                  - Use simple rules to guide complex behavior.
                </li>
                <li>
                  <span className="font-bold">
                    It forces you to make tough decisions
                  </span>{" "}
                  - Trim away everything that isn't absolutely necessary
                </li>
                <li>
                  <span className="font-bold">
                    It removes the friction of starting
                  </span>{" "}
                  - Forces you to decide on your first task the night before you
                  go to work
                </li>
                <li>
                  <span className="font-bold">
                    It requires you to single-task
                  </span>{" "}
                  - The method will force you to focus on one task at a time
                </li>
              </ul>
              <p>
                Read more about the method and the inspiring{" "}
                <a target={"_blank"} href="https://jamesclear.com/ivy-lee">
                  story of Ivy Lee{" "}
                </a>
              </p>
            </div>
            <ActionButtons />
          </div>
        </div>
        <div>
          <img
            src={screenToday}
            alt="Simple6"
            className="w-full h-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
