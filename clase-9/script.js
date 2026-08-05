//Ejercicio 1
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";

const plan =
  usuario.suscripcion === "premium" ? "Plan Premium" : "Plan Gratuito";

const saludo = usuario.nombre ? `Hola ${usuario.nombre}` : "Hola, Invitado";

//Ejercicio 2

const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false,
};

/*
1. Usando `||`, guardá en `idioma` el valor de `config.idioma` o `"español"` si está vacío.
2. Usando `&&`, guardá en `badge` el string `"Admin"` si `config.usuarioAdmin` es true, o `false` si no.
3. Usando `&&`, imprimí en consola `"Notificaciones activas"` solo si `config.notificaciones` es true.*/

const idioma = config.idioma || "Español";
//console.log(idioma);

const badge = config.usuarioAdmin && true 
//console.log(badge)

const consola = config.notificaciones === true && "Notificaciones activas" 
//console.log(consola)

//Ejercicio 3
const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};
/*
1. Desestructurá `titulo`, `director` y `año` en variables propias.
2. Desestructurá `duracion` renombrándola como `duracionMinutos`.
3. Desestructurá `calificacion` con un valor por defecto de `"Sin calificar"`.
4. Escribí una función `mostrarPelicula(pelicula)` que reciba el objeto y muestre `"[titulo] ([año]) — Dir. [director]"`,
 usando destructuring en el parámetro.*/

 const {titulo,director,año} = pelicula

 const{duracion:duracionMinutos } = pelicula

 const {calificacion = "Sin calificar"} = pelicula

 function mostrarPelicula(pelicula) {
    const {titulo,año,director} = pelicula
    console.log(`${titulo} ${año} — Dir. ${director}`)
 }