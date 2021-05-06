import React from "react";

const TextCard = ({ proyectos }) => {
  return (
    <>
      <div className="txt">
        <h1 className="title">{proyectos.title}</h1>
        <p className="desc">{proyectos.desc}</p>
      </div>
    </>
  );
};

export default TextCard;
