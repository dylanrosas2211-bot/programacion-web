import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Perfil from "./componentes/Perfil";
import "./App.css";

/* Para que ande tiene que tener los node_modules -> bun install */

/*para correr el proyecto bun run dev*/
function App() {
  const [count, setCount] = useState(0);

  return (<>
  
  <h1>Dylan Rosas</h1>
  <p>Desarrollador</p>
  <ul>Python-Construccion-Dinero</ul>
  

<Perfil nombre={"Dylan Rosas"} rol={"Desarrollador"} lenguajes={"Python-Construccion-Dinero"}/> 

  </>);
}

export default App;
