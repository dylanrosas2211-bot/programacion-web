import { useState } from "react"

export default function Contador({sumar, restar, reiniciar}){

const [operacion, setOperacion] = useState(0)
const [operacion2, setOperacion2] = useState(0)
function sumar(){
    setOperacion(sumar++)

}

return( 
<>
<button onClick={}>sumar</button>
<button>restar</button>
<button>reiniciar</button>
</>

)}