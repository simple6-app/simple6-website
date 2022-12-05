import React from "react";
import iconLove from "../assets/img/icons/love.svg";
import iconCheck from "../assets/img/icons/check.svg";
import iconGoal from "../assets/img/icons/goal.svg";

// Make a backlog of your tasks and keep track of your progress.
// Choose six tasks and be ready for the next day.
// Keep focus. No multitasking. One task at a time.

export const Features = () => {
  return (
    <>
      <section>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-6">
            <div>
              <img src={iconLove} />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Backlog</h3>
              <p className="text-lg text-gray-500">
                Make a backlog of your tasks and keep track of your progress.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <img src={iconCheck} />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Tasks</h3>
              <p className="text-lg text-gray-500">
                Choose six tasks and be ready for the next day in advance.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <img src={iconGoal} />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Focus</h3>
              <p className="text-lg text-gray-500">
                No multitasking. Complete one task at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-gray-200"></div>
    </>
  );
};
