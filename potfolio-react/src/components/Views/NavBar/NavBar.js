import React from "react";
import { Link } from "react-scroll";
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
              <Link
                className="buttons"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
              >
                SOBRE MI
              </Link>
              <Link
                className="buttons"
                activeClass="active"
                to="proyectos"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
              >
                PROYECTOS
              </Link>
              <Link
              className="buttons"
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
              >
                CONTACTO
              </Link>
            </ul>
          </div>
        </nav>
        
      </div>

    </>
  );
}
