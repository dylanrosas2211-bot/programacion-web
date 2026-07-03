//CON AYUDA DE LA IA DESARME EL CODIGO DE TODOS LOS 
//EJERCICIOS PARA TENER UN MACHETE Y RECORDAR COMO
//HICE EL CODIGO PARA NO OLVIDARME


//EJERCICIO 1
// ============================================================================
// EXPLICACIÓN: .map() se usa para TRANSFORMAR una lista en otra lista NUEVA.
// Agarra la lista original, pasa elemento por elemento y fabrica otra del mismo largo,
// pero quedándose únicamente con los datos que vos le ordenes dentro del return.
// ============================================================================

// 1. Creamos una constante para guardar el nuevo array resultante
const soloNombres = productos.map(function (producto) {

  // 2. El 'return' le dice al .map() qué dato exacto meter en la nueva lista.
  // En cada vuelta, extrae únicamente la propiedad '.nombre' del objeto actual.
  return producto.nombre;

}); // <- El .map() termina acá y devuelve la lista de nombres ya transformada

// 3. Mostramos en la consola el array final ["Auriculares...", "Teclado...", ...]
console.log(soloNombres);






//EJERCICIO 2
// ============================================================================
// EXPLICACIÓN: Usamos .map() para transformar la lista, pero a diferencia del 
// Ejercicio 1 (donde solo devolvíamos un texto suelto), acá queremos que cada 
// elemento de la nueva lista sea un OBJETO NUEVO que guarde dos datos adentro.
// Por eso estamos obligados a poner llaves '{ ... }' adentro del return.
// ============================================================================

// 1. CREAMOS LA CAJA: 'const preciosConIVA' es la variable donde se guardará nuestra lista nueva.
// 2. LA MÁQUINA (.map): Le pedimos al array 'productos' que use .map() para transformar sus elementos.
// 3. EL PASAJERO (producto): La función recibe a 'producto' (en singular), que representa al objeto que se está revisando en cada vuelta.
const preciosConIVA = productos.map(function (producto) {
  
  // 4. EL MOLDE: Usamos 'return { ... }' con llaves porque queremos fabricar un OBJETO NUEVO en cada vuelta.
  // Lo que pongamos acá adentro define los únicos datos que tendrá nuestra nueva lista (lo que no pongas, se descarta).
  return {
    
    // 5. CLONAR TEXTO: Creamos la propiedad 'nombre' y le asignamos el mismo nombre que ya tenía el producto original.
    nombre: producto.nombre,
    
    // 6. HACER LA MATEMÁTICA: Creamos 'precioFinal'. 
    // Multiplicamos el precio viejo por 1.21 (eso le suma el 21% de IVA).
    // Metemos todo dentro de 'Math.round()' para que lo redondee y nos dé un número entero sin decimales.
    precioFinal: Math.round(producto.precio * 1.21),
  };

}); // <- FIN DE LA MÁQUINA: El .map() termina acá. Ya recorrió los 8 productos y fabricó los 8 objetos transformados.

// 7. MOSTRAR RESULTADO: Imprime en la consola la lista nueva para comprobar que funcionó y ver cómo quedó.
console.log(preciosConIVA);







//EJERCICIO 3
// ==========================================================================================
// EXPLICACIÓN: Esto es un "combo" (encadenamiento de métodos). 
// Primero usamos .filter() para achicar la lista dejando solo los que cumplen una condición,
// y automáticamente abajo le enganchamos un .map() para transformar esos sobrevivientes.
// ==========================================================================================
// 1. EL ENCADENAMIENTO: Creamos 'nombresMuebles' para guardar el resultado final de dos procesos juntos.
// 2. EL PRIMER FILTRO (.filter): Primero llamamos a la lista completa 'productos'.
const nombresMuebles = productos
  .filter(function (producto) {
    
    // 3. LA CONDICIÓN: El .filter() revisa cada producto y SOLO deja pasar a los que su categoría sea EXACTAMENTE "Muebles".
    // Da 'true' para la Silla, la Mesa, etc. Los de "Electrónica" quedan afuera (se descartan).
    return producto.categoria === "Muebles";
  }) // <- Acá termina el .filter(). Al salir de acá, tenemos una lista temporal con SOLO los 3 productos de Muebles.

  // 4. EL SEGUNDO PASO (.map): Enganchamos un .map() INMEDIATAMENTE abajo. 
  // Este .map() ya NO trabaja con la lista completa de 8 productos, sino SOLO con los 3 muebles que sobrevivieron al filtro anterior.
  .map(function (producto) {
    
    // 5. LA EXTRACCIÓN: De esos 3 muebles, el 'return' extrae únicamente el texto de la propiedad '.nombre'.
    return producto.nombre;
  }); // <- Acá termina el .map(). Transformó los 3 objetos muebles en 3 textos con sus nombres.

// 6. MOSTRAR RESULTADO: Muestra en la consola el array final con los textos: ["Silla de Escritorio", "Mesa de Comedor", ...]
console.log(nombresMuebles);








//EJERCICIO 4
// ============================================================================
// EXPLICACIÓN: .find() es el "detective" de los arrays. 
// Va mirando elemento por elemento y, en el segundo exacto en que uno cumple 
// la condición, SE DETIENE, no busca más y te devuelve ese OBJETO SUELTO.
// A diferencia de .filter(), NO devuelve una lista, devuelve un solo elemento.
// ============================================================================

// 1. CREAMOS LA CAJA: 'const producto' (en singular) va a guardar un UNICO objeto, no una lista.
// 2. EL DETECTIVE (.find): Le pedimos al array 'productos' que empiece a buscar uno por uno.
const producto = productos.find(function(p) {
  
  // 3. LA CONDICIÓN DEL CASO: El .find() revisa cada producto buscando cuál tiene el id EXACTAMENTE igual a 6.
  // En cuanto encuentra al que tiene p.id === 6, frena la búsqueda por completo y se lo lleva.
  return p.id === 6;

}); // <- El .find() termina acá. Si lo encontró, te devuelve el objeto entero. Si no existiera, devolvería 'undefined'.

// 4. MOSTRAR RESULTADO: Muestra en la consola el objeto encontrado con todos sus datos (id, nombre, precio, stock, etc.)
console.log(producto);







//EJERCICIO 5
// =====================================================================================
// EXPLICACIÓN: Mezclamos .find() con .includes() para buscar por texto flexible
// (como un buscador de web), y después usamos un IF/ELSE para chequear qué encontramos.
// =====================================================================================

// 1. EL BUSCADOR DE PALABRAS (.find + .includes): 
// Usamos .find() para revisar la lista. Adentro, '.includes("Mouse")' funciona como un buscador de Google:
// da 'true' si el nombre contiene la palabra "Mouse" en alguna parte (aunque tenga más texto antes o después).
const mouseEncontrado = productos.find((p) => p.nombre.includes("Mouse"));

// 2. MONITOREO: Muestra en la consola el objeto completo que atrapó el .find() para verificar qué encontró.
console.log(mouseEncontrado);

// 3. LA CONDICIÓN (if):
// El programa se para sobre el producto encontrado y pregunta si su nombre es EXACTAMENTE "Mouse Inalámbrico".
if (mouseEncontrado.nombre == "Mouse Inalámbrico") {
  
  // 4. CAMINO DEL SÍ: Si el nombre coincide letra por letra, se ejecuta este bloque.
  // Las comillas invertidas (``) sirven para meter la variable directo en el texto usando ${...}.
  console.log(`Encontrado: [${mouseEncontrado.nombre}]`);

} else {
  
  // 5. CAMINO DEL NO: Si el .find() hubiese agarrado otro tipo de mouse (ej: "Mouse Gamer") 
  // o si la condición de arriba diera falso, el programa saltaría directamente a este 'else'.
  console.log("No encontrado");
}






//EJERCICIO 6

// ============================================================================
// EXPLICACIÓN GENERAL PARA EL MACHETE:
// .some()  -> Devuelve true si AL MENOS UNO cumple la condición (Es un "¿Hay alguno?").
// .every() -> Devuelve true solo si TODOS cumplen la condición (Es un "¿Todos cumplen?").
// Ambos devuelven únicamente un valor booleano: true o false.
// ============================================================================

// 1. ¿Hay algún producto con precio mayor a $100.000?
// REGLA: Usamos .some() porque la pregunta dice "alguno".
// El código recorre la lista y, si encuentra tan solo un producto que pase los 100000, frena y escupe 'true'.
console.log(productos.some(p => p.precio > 100000));


// 2. ¿Todos los productos tienen `id` definido?
// REGLA: Usamos .every() porque exige que "todos" cumplan.
// La condición 'p.id !== undefined' significa "que el id NO sea indefinido" (o sea, que sí exista).
// Si todos tienen id, da 'true'. Si engancha un solo producto sin id, da 'false'.
console.log(productos.every(p => p.id !== undefined)); 


// 3. ¿Hay algún producto inactivo (`activo: false`)?
// REGLA: Volvemos a .some() por la palabra "algún".
// Compara la propiedad '.activo' de cada elemento buscando que sea exactamente igual a 'false'.
console.log(productos.some(p => p.activo === false)); 


// 4. ¿Todos los productos de Electrónica tienen stock mayor a 0?
// REGLA: Es una pregunta con trampa porque no habla de "todos los productos", sino solo de los de "Electrónica".
// - PASO A: El .filter() arma primero una sublista con los productos de esa categoría.
// - PASO B: Al final de esa listita filtrada, le enganchamos el .every() para chequear si cada uno tiene stock > 0.
console.log(productos.filter(p => p.categoria === "Electrónica").every(p => p.stock > 0));



//EJERCICIO 7 FALTA HACER  



//EJERCICIO 8 

// ============================================================================
// EJERCICIO 8 — EMBUDO DE FILTROS EN CADENA
// Explicación: Cuando enganchamos muchos .filter() seguidos, creamos un efecto "embudo".
// Un producto tiene que pasar la primera aduana para poder competir en la segunda.
// Al final, el .map() solo transforma a los poquitos que sobrevivieron a todo.
// ============================================================================

// 1. EL EMBUDO TRIPLE: Creamos la constante 'productosFiltrados' para guardar los nombres de los ganadores.
const productosFiltrados = productos
  
  // 2. FILTRO 1: Revisa la lista completa de productos y SOLO deja pasar los que tengan 'activo: true'.
  // Los productos que estén desactivados mueren acá y ya no pasan al siguiente renglón.
  .filter(p => p.activo)
  
  // 3. FILTRO 2: Agarra la sublista del paso anterior y SOLO deja pasar los que tengan stock mayor a 0.
  // Si un producto estaba activo pero no quedaba nada en el depósito, queda eliminado acá.
  .filter(p => p.stock > 0)
  
  // 4. FILTRO 3: Agarra los sobrevivientes del depósito y SOLO deja pasar los que cuesten MENOS de $20.000.
  // Los productos caros quedan descartados en este último colador.
  .filter(p => p.precio < 20000)
  
  // 5. LA TRANSFORMACIÓN FINAL: A esta altura la lista ya quedó súper limpia y con muy pocos elementos.
  // El .map() se para sobre esos sobrevivientes y se queda ÚNICAMENTE con el texto de la propiedad '.nombre'.
  .map(p => p.nombre);

// 6. IMPRESIÓN: Muestra en la consola el array final de textos con los nombres que pasaron las 3 aduanas.
console.log(productosFiltrados);