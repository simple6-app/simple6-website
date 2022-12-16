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
                <i>Atomic Habits</i> is a best-selling book that has sold over 9
                million copies worldwide. It introduces a task management method
                created by <i>Ivy Lee</i> that is simple but effective. The
                method involves prioritizing your to-do list and following
                simple rules to guide your behavior, making decisions which 6
                tasks to do the night before, and focusing on one task at a
                time.{" "}
                <a target={"_blank"} href="https://jamesclear.com/ivy-lee">
                  Learn more
                </a>{" "}
                about the method and Ivy Lee's story.
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
