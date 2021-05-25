import React from "react";

const Proyecto = (props) => {
  const { title, description, img } = props;

  return (
    <div className="proyecto">
      <img className="img-proyecto" src={img} alt="" />
      <div className="txt">
        <h1 className="title">{title}</h1>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default Proyecto;
