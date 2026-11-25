import {useState } from "react"
import useContador from "../hooks/useContador"

export default function ContandoVisitas() {
   const { sumar, contador} = useContador()

   return(
    <div>
      <p>
        contador:{contador}
     </p>
    <button onClick={sumar}>
      Incrementar
    </button>
  </div>
)

}
