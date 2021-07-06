import React from "react";
import imgAbout from "../About/img/aboute-me.svg";
import "./styles-about.css";

const About = () => {
  return (
    <>
      <h1 className="about-title">Un poco sobre mi...</h1>
      <div className="subrayado">.</div>
      <div className="about" id="about">
        <div className="fondo">.</div>
        <div className="fondo-secundario">.</div>
        <section className="about-izq">
          <img src={imgAbout} alt="" />
        </section>
        <section className="about-der">
          <div className="about-desc">
            <p className="about-text">
              Hola, soy Nicolas Ramirez, desarrollador Front-End. Actualmente
              viviendo en Argentina.
            </p>
            <p className="about-text">
              En 2019 comence en la universidad mis estudios en programacion,
              pase por varios lenguajes y plataformas hasta que me incursioné en
              el desarrollo web.
            </p>
            <p className="about-text">
              {" "}
              Actualmente me encuentro desarrollando (y aprendiendo) en ReactJS.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
