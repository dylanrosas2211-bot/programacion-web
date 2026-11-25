import {useState } from "react"

export default function ContandoCafes() {
  const [contador, setContador] = useState(0)

  console.log(contador)

  function sumar() {
  setContador (contador + 1)
}
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
