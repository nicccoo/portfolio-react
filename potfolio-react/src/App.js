import "./App.css";
import NavBar from "./components/Views/NavBar/NavBar";
import Hero from "./components/Views/Hero/Hero";
import About from "./components/Views/About/About"
import Proyectos from "./components/Views/Proyectos/Proyectos";
import Contacto from "./components/Views/Contacto/Contacto";


function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero />
        <About />
        <Proyectos />
        <Contacto />
    </div>
  );
}

export default App;
  