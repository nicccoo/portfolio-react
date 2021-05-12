import React from "react";
import email from "./icons/email.svg";
import github from "./icons/github1.svg";
import linkedin from "./icons/linkedin.svg";

import "./styles-contacto.css";

const Contacto = () => {
  return (
    <div>
      <div className="container-contacto" id="contacto">
        <div className="container-icons">
          <a href="mailto:nicolas_31_07@hotmail.com">
            <img className="icon-contacto" src={email} alt="" />
          </a>
          <a href="https://github.com/nicccoo" target="_blank">
            <img className="icon-contacto" src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolasramirez-dev/"
            target="_blank"
          >
            <img className="icon-contacto" src={linkedin} alt="" />
          </a>
        </div>
        <div className="author">
          <h6>Nicolas Ramirez - Portfolio v1.0</h6>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
