import React from "react";
import Proyecto from "./Proyecto";
import imagen1 from "./img/imgasd.jpg";
import "./styles-proyectos.css";

const proyectos = [
  {
    imagen: imagen1,
    title: "Proyecto 1",
    description: "Descripcion 1",
  },

  {
    imagen: imagen1,
    title: "Proyecto 2",
    description: "Descripcion 2",
  },

  {
    imagen: imagen1,
    title: "Proyecto 3",
    description: "Descripcion 3",
  },

  {
    imagen: imagen1,
    title: "Proyecto 4",
    description: "Descripcion 4",
  },

  {
    imagen: imagen1,
    title: "Proyecto 5",
    description: "Descripcion 5",
  },

  {
    imagen: imagen1,
    title: "Proyecto 6",
    description: "Descripcion 6",
  },
];

const Proyectos = () => {
  return (
    <div className="container-proyectos" id="proyectos">
      {proyectos.map((proyecto) => {
        return (
          <Proyecto key={proyecto.title}
            title={proyecto.title}
            description={proyecto.description}
            img={proyecto.imagen}
          />
        );
      })}
    </div>
  );
};

export default Proyectos;
