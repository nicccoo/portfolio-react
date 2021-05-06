import React from "react";
import email from "./icons/email.svg";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";
import centericon from "./icons/centericon.svg";
import './styles-contacto.css'

const Contacto = () => {
  return (
    <div>
      <div className="container-contacto">
        <div className="author">
          <p className="nombre">Nicolas Ramirez</p>
        </div>
        <div className="logo-central">
          <img src={centericon} alt="" />
        </div>
        <div className="container-icons">
          <img className="icon-contacto" src={email} alt="" />
          <img className="icon-contacto" src={github} alt="" />
          <img className="icon-contacto" src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
