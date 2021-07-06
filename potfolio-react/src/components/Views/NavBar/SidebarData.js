import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =  [

  {
    title: 'Home', 
    path: 'hero',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },

  {
    title: 'About', 
    path: 'about',
    icon: <IoIcons.IoMdPerson/>,
    cName: 'nav-text'
  },

  {
    title: 'Projectos', 
    path: 'proyectos',
    icon: <FaIcons.FaFolder/>,
    cName: 'nav-text'
  }, 

  {
    title: 'Contacto', 
    path: 'contacto',
    icon: <AiIcons.AiFillPhone/>,
    cName: 'nav-text'
  } 
]