import React from "react";
import email from "./icons/email.svg";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";

import './styles-contacto.css'

const Contacto = () => {
  return (
    <div>
      <div className="container-contacto">
        <div className="container-icons">
          <img className="icon-contacto" src={email} alt="" />
          <img className="icon-contacto" src={github} alt="" />
          <img className="icon-contacto" src={linkedin} alt="" />
        </div>
        <div className="author">
          <h6>Nicolas Ramirez - Portfolio v1.0</h6>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
