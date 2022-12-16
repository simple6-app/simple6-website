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
                simple rules:
              </p>

              <ul className="list-decimal pl-4">
                <li>Write down all your tasks.</li>
                <li>Chose six tasks to accomplish the next day.</li>
                <li>Select task in order of importance</li>
                <li>
                  Focus on the first task until it is finished. Continue working
                  through the tasks on your list in order of priority
                </li>
                <li>
                  If you have any tasks left at the end of the day, move them to
                  a new list of six tasks for the following day
                </li>
                <li>Repeat this process every work day.</li>
              </ul>
              <p>
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
