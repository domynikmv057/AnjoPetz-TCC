import React, { useContext, useState } from "react";
import * as IOIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import AuthContext from "../../../contexts/Auth/Auth";

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
  // {
  //   title: "Ajudar",
  //   path: "/ajuda",
  //   icons: <FiIcons.FiHelpCircle />,
  //   cName: "nav-text",
  // },
];
