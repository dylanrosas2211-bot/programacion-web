import { useState, useEffect } from "react";

export default function Ficha({ nombre, rol }) {
  const [favorito, setFavorito] = useState(false);

  console.log(favorito)

  useEffect(() => {
    setFavorito(localStorage.getItem("favorito"))
  },[])

  function manejarClicks() {
    localStorage.setItem("favorito", !favorito);
    setFavorito(!favorito)

  }

  return (
    <>
      <h1>
        ficha
      </h1>

      { favorito === 'true' || favorito === true ? <button onClick = {manejarClicks}>
       favorito
      </button> : <button onClick = {manejarClicks}>
      no favorito
      </button>  }

    </>
  )
}
