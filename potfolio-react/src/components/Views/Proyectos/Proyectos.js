import React from "react";
import Card from "./Card";
import imagen1 from "./img/imgasd.jpg"
import "./styles-proyectos.css";

const proyectos = [
  {
    imagen: imagen1,
    title: "Proyecto 1",
    desc: "Descripcion 1",
  },

  {
    imagen: imagen1,
    title: "Proyecto 2",
    desc: "Descipcion2"
  },
  
  {
    imagen: imagen1,
    title: "Proyecto 3",
    desc: "Descipcion 3"
  },

  {
    imagen: imagen1,
    title: "Proyecto 4",
    desc: "Descipcion 4"
  },

  {
    imagen: imagen1,
    title: "Proyecto 5",
    desc: "Descipcion 5"
  },

  {
    imagen: imagen1,
    title: "Proyecto 6",
    desc: "Descipcion 6"
  }
  
];

const Proyectos = () => {
  return (
    <div className="container-proyectos" id="proyectos">
      <Card proyectos={proyectos[0]} />
      <Card proyectos={proyectos[1]} />
      <Card proyectos={proyectos[2]} />
      <Card proyectos={proyectos[3]} />
      <Card proyectos={proyectos[4]} />
      <Card proyectos={proyectos[5]} />
    </div>
  );
};

export default Proyectos;
