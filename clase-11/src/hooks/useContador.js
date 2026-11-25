import { useState } from "react"
export default function useContador() {
  const [contador, setContador] = useState(0)

  console.log(contador)

  function sumar() {
    setContador (contador + 1)
  }

  return {
    sumar, contador
  }
}
