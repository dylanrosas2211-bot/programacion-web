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

//nombres();

//Agarrar la url https://api.github.com/users/TU_USUARIO y traer los datos solicitados
//foto, nombre y cantidad de repositorios publicos. -> hecho
//loguear los resultados dentro de la funcion -> hecho
//solamente devolver el nombre, foto y cantidad de repos en un objeto nuevo

async function traerPerfilDeGitHub() {
  try {
    const traerDatosSolicitadosGitHub = await fetch(
      "https://api.github.com/users/dylanrosas2211-bot",
    );
    if (!traerDatosSolicitadosGitHub.ok) {
      throw new Error("Error HTTP: " + traerDatosSolicitadosGitHub.status);
    }
    const datosTransformados = await traerDatosSolicitadosGitHub.json();
    console.log({
      nombre: datosTransformados.name,
      foto: datosTransformados.avatar_url,
      cantidadRepos: datosTransformados.public_repos,
    });
    return {
      nombre: datosTransformados.name,
      foto: datosTransformados.avatar_url,
      cantidadRepos: datosTransformados.public_repos,
    };
  } catch (error) {
    console.log("Hubo un error", error);
  }
}

const perfilDeGitHub = traerPerfilDeGitHub();
