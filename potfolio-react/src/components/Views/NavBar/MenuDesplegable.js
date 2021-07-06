import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { Link } from "react-scroll";

export default function MenuDesplegable() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="container-desplegable">
      <a className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </a>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a className="menu-close">
              <AiIcons.AiOutlineClose />
            </a>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link
                  onClick={showSidebar}
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
