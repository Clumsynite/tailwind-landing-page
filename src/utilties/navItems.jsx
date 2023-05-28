/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../pages/Home";

const navItems = [
  {
    label: "Home",
    path: "",
    name: "home",
    key: "main",
    element: <Home />,
  },
];

export const menuItems = navItems.map((module) => ({ ...module, element: null }));

export default navItems;
