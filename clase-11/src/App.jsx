import { useState } from 'react'
import './App.css'
import Reloj from './componentes/reloj'

function App() {
  const [abierto,setAbierto] = useState(true)

  function ocultarReloj (){
    setAbierto(!abierto)
  }

  return (
    <>
      hola dylan
      <button onClick={ocultarReloj}>
        ocultar 
      </button>
      {
        abierto ? <Reloj/> : ""
      }
      
    </>
  )
}

export default App
