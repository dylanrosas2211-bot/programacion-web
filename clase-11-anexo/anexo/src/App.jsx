import { useState, useEffect } from "react";
import "./App.css";
import Pokemon from "./componentes/pokemon";

const URL = "https://api.github.com/users/dylanrosas2211-bot"

function App() {
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function traerPerfil() {
      try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}`);
        }
        const perfil = await respuesta.json();
        //console.log(perfil);
        setDatos(perfil);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setCargando(false);
      }
    }

    traerPerfil();
  }, []);

  if (cargando) {
    return <>cargando...</>;
  }
  if (error) {
    return <>Error: {error}</>;
  }

  return (
    <>
      {/* <img src={datos.avatar_url} alt={datos.avatar_url || datos.name} />
      <h2>{datos.name}</h2>*/}
      <Pokemon/>
    </>
  );
}

export default App;
