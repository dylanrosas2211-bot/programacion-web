import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Perfil from "./componentes/Perfil";
import TarjetaPelicula from "./componentes/TarjetaPelicula";
import "./App.css";

/* Para que ande tiene que tener los node_modules -> bun install */

/*para correr el proyecto bun run dev*/

const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
];

function App() {
  const [count, setCount] = useState(0);

  return (<>
  
  <h1>Dylan Rosas</h1>
  <p>Desarrollador</p>
  <ul>Python-Construccion-Dinero</ul>
  

<Perfil nombre={"Dylan Rosas"} rol={"Desarrollador"} lenguajes={"Python-Construccion-Dinero"}/> 

{peliculas.map((pelicula)=>( 
<TarjetaPelicula titulo={pelicula.titulo} año={pelicula.año} vista={pelicula.vista}/>
))}


  </>);
}

export default App;
