import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Quem Somos",
    path: "/sobre-nos",
    icons: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Adotar",
    path: "/adotar",
    icons: <FaIcons.FaDog />,
    cName: "nav-text",
  },
];
