import React from "react";
import iphone from "../assets/img/iphone.png";

export const Features = () => {
  return (
    <>
      <section>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Feature</h3>
              <p className="text-lg text-gray-500">
                Quibusdam nemo eius consectetur inventore exercitationem
                possimus quidem delectus magnam.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Feature</h3>
              <p className="text-lg text-gray-500">
                Quibusdam nemo eius consectetur inventore exercitationem
                possimus quidem delectus magnam.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Feature</h3>
              <p className="text-lg text-gray-500">
                Quibusdam nemo eius consectetur inventore exercitationem
                possimus quidem delectus magnam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-gray-200"></div>
    </>
  );
};
