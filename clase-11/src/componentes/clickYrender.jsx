import { useRef, useState } from "react"

export default function ClicksYRenders() {
  const [clicks, setClicks] = useState(0);
  const renders = useRef(0);

  console.log(renders.current)

  function enfocar() {
    renders.current += 1;
    console.log("Valor actual en el ref:", intentosRef.current);
  }

  function manejarEstado() {
    setClicks(clicks + 1 )
  }

  return (
    <div>
      <p>clicks: {clicks}</p>
      <p>renders: { renders.current }</p>
      <button onClick={() => renders.current ++ }>sumar ref</button>
      <button onClick={manejarEstado}>Sumar</button>
      <button onClick={enfocar}>focus</button>
    </div>
  )
}
