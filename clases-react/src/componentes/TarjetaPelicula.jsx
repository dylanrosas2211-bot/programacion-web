export default function TarjetaPelicula({titulo, año, vista }){
return(
 <>  <h1> {titulo} </h1>
  <p> {año}  </p>
  <ul> {vista === true ? "✓" : ""} </ul></>
)

}