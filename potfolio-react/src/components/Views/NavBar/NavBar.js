import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "./img/logo.png";
import MenuDesplegable from "./MenuDesplegable";
import "./styles-navbar.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(null);

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div className={navbar ? "container active" : "container"}>
        <MenuDesplegable />
              <Link
                className="logo"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
              >
                <img src={logo} alt="" />
              </Link>
        <nav className="navbar">
          <div className="navbar__items">
            <ul>
              <Link
                className="buttons"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-138}
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
                offset={-70}
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
