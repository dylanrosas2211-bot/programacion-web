import { useState } from "react"
import useContador from "../hooks/useContador"

export default function ContandoCafes() {
//agarramos lo que queramos del hook, variables, funciones
  const { sumar, contador} = useContador()


  return(
    <div>
      <p>
        contador cafe:{contador}
     </p>
    <button onClick={sumar}>
      Incrementar
    </button>
  </div>
)

}
