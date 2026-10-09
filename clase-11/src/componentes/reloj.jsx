export default function Reloj(){
    
    const fechaYHora = new Date()
    let segundos = fechaYHora.getSeconds()
     
    setInterval(() => {
        segundos = segundos + 1;  
    },1000)


    return(
        <>
            segundos:  
            {segundos}
        </>
    )
}