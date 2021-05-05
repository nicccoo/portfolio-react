import React from "react";
import imagen1 from "./img/imgasd.jpg";


const ProyectosCard = (props) => {
  return (
    <div>
      
        <div className="container-proyectos">
          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 1</h1>
              <p className="desc">Descripcion 1</p>
            </div>
          </div>

          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 2</h1>
              <p className="desc">Descripcion 2</p>
            </div>
          </div>

          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 3</h1>
              <p className="desc">Descripcion 3</p>
            </div>
          </div>

          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 4</h1>
              <p className="desc">Descripcion 4</p>
            </div>
          </div>

          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 5</h1>
              <p className="desc">Descripcion 5</p>
            </div>
          </div>

          <div className="proyecto">
            <img className="img-proyecto" src={imagen1} alt="" />
            <div className="txt">
              <h1 className="title">Proyecto 6</h1>
              <p className="desc">Descripcion 6</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProyectosCard;
