import React from "react";
import { Header } from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};