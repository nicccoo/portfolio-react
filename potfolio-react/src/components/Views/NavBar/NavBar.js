import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cancel from "@material-ui/icons/Cancel";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import logo from "./img/logo.png";
import { IconButton } from "@material-ui/core";
import "./styles-navbar.css";
// import MenuDesplegable from './MenuDesplegable'

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="container">
      {/* <MenuDesplegable/>] */}
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <nav className="navbar">
        <div className="navbar__items">
          <ul>
            <li><a className="btn" href="#">SOBRE MI</a></li>
            <li><a className="btn" href="#">PROYECTOS</a></li>
            <li><a className="btn" href="#">CONTACTO</a></li>
          </ul>
        </div>
        {/* <IconButton onClick={toggleMenu}>
          <MenuIcon fontsize="large" />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleMenu}>
          <IconButton onClick={toggleMenu}>
            <Cancel />
          </IconButton>
        </Drawer> */}
      </nav>
    </div>
  );
}
