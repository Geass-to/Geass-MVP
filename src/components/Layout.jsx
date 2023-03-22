import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="bg-card">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
