import "./App.css";
import NavBar from "./components/Views/NavBar/NavBar";
import Hero from "./components/Views/Hero/Hero";
import Proyectos from "./components/Views/Proyectos/Proyectos";
import Contacto from "./components/Views/Contacto/Contacto";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Proyectos />
      <Contacto/>
     
    </div>
  );
}

export default App;
