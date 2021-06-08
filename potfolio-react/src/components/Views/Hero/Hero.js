import React from "react";
import "./styles-hero.css";
import imgHero from "./img/hero2.svg";
import imgWave from "./img/wave1.svg";

export const Hero = () => {
  return (
    <div>
      <div className="container-hero" id="hero">

        <div className="hero__izquierda">
          <h2 className="hero-title">Bienvenidos!</h2>
          <p className="hero-text">
            Me llamo <b className="orange">Nico,</b> soy desarrollador <b className="orange">Front End</b> 
            <p>y este es mi <b className="orange">Portafolio. </b>Espero que lo disfrutes!</p>
           
          </p>
        </div>
        <div className="hero__derecha">
          <img src={imgHero} alt="" />
        </div>
      </div>
      {/* <img className="wave" src={imgWave} alt="" /> */}
    </div>
  );
};

export default Hero;
