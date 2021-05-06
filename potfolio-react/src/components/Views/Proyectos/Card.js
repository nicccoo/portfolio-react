import React from "react";
import TextCard from './TextCard'

import "./styles-proyectos.css";

const Card = ({proyectos}) => {
  return (
    <>
      
        <div className="proyecto">
          <img className="img-proyecto" src={proyectos.imagen} alt="" />
          <TextCard proyectos={proyectos}/>
        </div>  
    </>
  );
};

export default Card;
