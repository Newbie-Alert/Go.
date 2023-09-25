import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

export default function RootPage({ tokenStorage }) {
  return (
    <>
      <Header tokenStorage={tokenStorage} />
      <NavBar />
      <Outlet />
    </>
  );
}
