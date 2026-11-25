import { useState } from 'react'
import './App.css'
import Reloj from './componentes/reloj'
import ClicksYRenders from './componentes/clickYrender'
import Ficha from "./componentes/Ficha";
import ContandoCafes from './componentes/ContadorDeCafes';
import ContandoVisitas from './componentes/ContadorDeVisitas';

function App() {
  const [abierto,setAbierto] = useState(true)

  function ocultarReloj (){
    setAbierto(!abierto)
  }

  return (
    <>
      <Ficha nombre="Dylan" rol="Programador mas crack" />
      hola dylan
      <button onClick={ocultarReloj}>
        ocultar
      </button>
      {
        // abierto ? <Reloj/> : ""
      }
      <ContandoCafes />
      <ContandoVisitas />
      <ClicksYRenders />
    </>

  )
}

export default App
