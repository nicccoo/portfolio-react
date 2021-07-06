import React from "react";
import "./styles-hero.css";
import imgHero from "./img/hero.svg";

export const Hero = () => {
  return (
    <div>
      <div className="container-hero" id="hero">
        <div className="hero__izquierda">
          <h2 className="hero-title">Hola, soy Nico</h2>
          <p className="hero-text">
            Desarollador Front-End
          </p>
          <p className="hero-text">
            Bienvenidos a mi portafolio
          </p>
        </div>
        <div className="hero__derecha">
          <img src={imgHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
