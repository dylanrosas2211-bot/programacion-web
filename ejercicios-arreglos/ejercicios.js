const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    categoria: "Electrónica",
    precio: 15000,
    stock: 8,
    activo: true,
  },
  {
    id: 2,
    nombre: "Teclado Mecánico",
    categoria: "Electrónica",
    precio: 22000,
    stock: 0,
    activo: true,
  },
  {
    id: 3,
    nombre: "Silla Ergonómica",
    categoria: "Muebles",
    precio: 85000,
    stock: 3,
    activo: true,
  },
  {
    id: 4,
    nombre: "Lámpara de Escritorio",
    categoria: "Muebles",
    precio: 9500,
    stock: 12,
    activo: false,
  },
  {
    id: 5,
    nombre: "Mouse Inalámbrico",
    categoria: "Electrónica",
    precio: 7800,
    stock: 20,
    activo: true,
  },
  {
    id: 6,
    nombre: 'Monitor 27"',
    categoria: "Electrónica",
    precio: 120000,
    stock: 2,
    activo: true,
  },
  {
    id: 7,
    nombre: "Alfombra de Escritorio",
    categoria: "Muebles",
    precio: 4200,
    stock: 0,
    activo: false,
  },
  {
    id: 8,
    nombre: "Webcam HD",
    categoria: "Electrónica",
    precio: 18000,
    stock: 5,
    activo: true,
  },
];

//**Ejercicio 1 — `map` básico**

//Creá un array `soloNombres` que tenga solo los nombres
//de todos los productos.

const soloNombres = productos.map(function (producto) {
  return producto.nombre;
});

//console.log(soloNombres);

//Ejercicio 2 — map con transformación
//Creá un array preciosConIVA donde cada elemento
//  sea un objeto con nombre y precioFinal
// (el precio original multiplicado por 1.21,
//  redondeado con Math.round()).

const preciosConIVA = productos.map(function (producto) {
  return {
    nombre: producto.nombre,
    precioFinal: Math.round(producto.precio * 1.21),
  };
});
console.log(preciosConIVA);

//Ejercicio 3 
const nombresMuebles = productos
  .filter(function (producto) {
    return producto.categoria === "Muebles";
  })
  .map(function (producto) {
    return producto.nombre;
  });

//console.log(nombresMuebles);


//Ejercicio 4 — `find` Encontrá el producto con `id === 6` y mostrá su nombre y precio en consola.

const producto = productos.find(function(p) {
  return p.id === 6;
});
//console.log(producto);


//Ejercicio 5 — find con verificación
const mouseEncontrado = productos.find((p) => p.nombre.includes("Mouse"))
//console.log(mouseEncontrado)
if(mouseEncontrado.nombre == "Mouse Inalámbrico")
  {
  //console.log(`Encontrado: [${mouseEncontrado.nombre}]`)
  }
  else {
  //console.log ("No encontrado")
  }

  

//Ejercicio 6 Respondé estas preguntas con `some` o `every`, cada una en una línea:

//1. ¿Hay algún producto con precio mayor a $100.000?

//console.log(productos.some(p => p.precio > 100000));

//2. ¿Todos los productos tienen `id` definido?

//console.log(productos.every(p => p.id !== undefined)); 

//3. ¿Hay algún producto inactivo (`activo: false`)?

//console.log(productos.some(p => p.activo === false)); 

//4. ¿Todos los productos de Electrónica tienen stock mayor a 0?

//console.log(productos.filter(p => p.categoria === "Electrónica").every(p => p.stock > 0)); 

//Para la última, vas a necesitar `filter` antes de `every`.

//ejercicio 7 HACER CON EL PROFE (REDUCE)

//ejercicio 8 — encadenamiento
const productosFiltrados = productos
  .filter(p => p.activo)
  .filter(p => p.stock > 0)
  .filter(p => p.precio < 20000)
  .map(p => p.nombre);

//console.log(productosFiltrados);

//Ejercicio 9 HACER CON EL PROFE (REDUCE)

//Ejercicio 10 — integrador HACER CON EL PROFE YA QUE NO PUDE TERMINARLO
//(No pude entender lo demas solo total y activos)
const resumirInventario = (productos) => {
  const total = productos.length;
  const activos = productos.filter(p => p.activo).length;
  return {
    total: total,
    activos: activos
  };
};

//console.log(resumirInventario(productos));