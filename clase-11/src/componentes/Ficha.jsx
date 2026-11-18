import { useState, useEffect } from "react";

export default function Ficha({ nombre, rol }) {
  const [favorito, setFavorito] = useState(false);


  useEffect(() => {
    setFavorito(localStorage.getItem("favorito"))
  },[])

  function manejarClicks() {
    setFavorito(!favorito)
    localStorage.setItem("favorito", !favorito);

  }

  return (
    <>
      <h1>
        ficha
      </h1>

      { favorito === true ? <button onClick = {manejarClicks}>
        favorito
      </button> : <button onClick = {manejarClicks}>
        no favorito
      </button>  }

    </>
  )
}
