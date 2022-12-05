import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { ScrollToTop } from "../components";

export const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="container max-w-screen-lg px-5 mx-auto ">
        <div className="grid gap-y-28">
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
};
