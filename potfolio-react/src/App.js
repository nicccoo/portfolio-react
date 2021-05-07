import "./App.css";
import NavBar from "./components/Views/NavBar/NavBar";
import Hero from "./components/Views/Hero/Hero";
import Proyectos from "./components/Views/Proyectos/Proyectos";
import Contacto from "./components/Views/Contacto/Contacto";
import MenuDesplegable from './components/Views/NavBar/MenuDesplegable'
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Fade>
        <NavBar />
        <Hero />
        <Proyectos />
        <Contacto />
      </Fade>
    </div>
  );
}

export default App;
  