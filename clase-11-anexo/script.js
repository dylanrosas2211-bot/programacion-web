async function nombres() {
  const traerNombres = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ); //trae cosas de afuera
  const convertirNombresAobjetos = await traerNombres.json(); //convierte de formato json a objeto de JavaScript(js)
  console.log(convertirNombresAobjetos);
}

//nombres()

//then significa despues
//fetch("https://jsonplaceholder.typicode.com/users")
//.then(respuesta => respuesta.json())
//.then(convertidos => console.log(convertidos))

//en el fetch baja instantaneaente, pasa los resultados de arriba a abajo

async function nombres() {
  try {
    const traerNombres = await fetch(
      "https://jsonplaceholder.typicode.com/usersSAS",
    ); //trae cosas de afuera
    if (!traerNombres.ok) {
      throw new Error("Error HTTP: " + traerNombres.status);
    }
    const convertirNombresAobjetos = await traerNombres.json(); //convierte de formato json a objeto de JavaScript(js)
    console.log(convertirNombresAobjetos);
  } catch (error) {
    console.log("Hubo un error", error);
  }
}

nombres();
