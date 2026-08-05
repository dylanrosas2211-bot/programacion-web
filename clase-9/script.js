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
