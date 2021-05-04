import React from "react";
import './styles-hero.css'
import imgHero from './img/undraw_Hello_qnas.png'


export const Hero = () => {
  return (
    <div>
      <div className="container-hero">
        <div className="hero__izquierda">
          <h2 className="hero-title">Bienvenidos,</h2>
          <p className="hero-text">Me llamo Nico, <a className="asd">soy desarrollador Front End</a>, y este es mi Portafolio. Espero que lo disfrutes!</p>
        </div>
        <div className="hero__derecha">
          <img src={imgHero} alt=""/>
        </div>
      </div>
    </div>
  );
};



export default Hero;


