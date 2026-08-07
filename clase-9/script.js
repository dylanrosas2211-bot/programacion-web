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

 //### Ejercicio 4 — Destructuring de arrays


const coordenadas = [40.7128, -74.0060, 10];
const colores = ["rojo", "verde", "azul", "amarillo"];

/*1. Desestructurá `coordenadas` en variables `latitud`,
 `longitud` y `altitud`.
2. Desestructurá `colores` tomando solo el primero 
y el último (saltá los del medio). Para el último,
 fijate cuántos elementos tiene el array.
3. Desestructurá `colores` tomando el primero y 
guardando el resto en una variable `resto` usando
 el operador `...` (rest).*/

 const [Primera_Cordenada, Segunda_Cordenada, Tercera_Cordenada] = coordenadas
 console.log (Primera_Cordenada);
 console.log (Segunda_Cordenada);
 console.log (Tercera_Cordenada);


 const [rojo, , , amarillo] = colores
 console.log(rojo)
 console.log(amarillo)

 const [primero, ...rest] = colores
 console.log(primero, rest)

 