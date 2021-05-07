import React, { useState } from "react";
import logo from "./img/logo.png";
import "./styles-navbar.css";
import MenuDesplegable from "./MenuDesplegable";

export default function NavBar() {
  return (
    <>
      <div className="container">
        <MenuDesplegable />

        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav className="navbar">
          <div className="navbar__items">
            <ul>
              <li>
                <a className="btn" href="#">
                  SOBRE MI
                </a>
              </li>
              <li>
                <a className="btn" href="#">
                  PROYECTOS
                </a>
              </li>
              <li>
                <a className="btn" href="#">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
