import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./styles-navbar.css";
import logo from "./img/logo.png";

const useStyles = makeStyles()

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar">
          <div className="navbar__items">
            <Button color="default">PROYECTOS</Button>
            <Button color="default">SOBRE MI</Button>
            <Button color="default">CONTACTO</Button>   
          </div>
        </nav>
      </div>
    </div>
  );
}
