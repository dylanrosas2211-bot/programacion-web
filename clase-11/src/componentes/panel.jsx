import { useState } from "react";

export default function Panel() {
  const [abierto, setAbierto] = useState(false);

  function abrirCerrar() {
    setAbierto(!abierto)
  }

  return (
    <div>
      <button onClick={abrirCerrar}>
        {abierto ? "Cerrar" : "Abrir"}
      </button>

      {abierto && (
        <div className="contenido">
          <p>Este contenido se muestra y se oculta.</p>
        </div>
      )}
    </div>
  );
}