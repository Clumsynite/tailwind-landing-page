/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";

const navItems = [
  {
    label: "Home",
    path: "",
    name: "home",
    key: "main",
    element: <Home />,
  },
  {
    label: "About",
    path: "about",
    name: "About",
    key: "about",
    element: <About />,
  },
];

export const menuItems = navItems.map((module) => ({ ...module, element: null }));

export default navItems;
