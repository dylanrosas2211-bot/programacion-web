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

//console.log(preciosConIVA);
const nombresMuebles = productos
  .filter(function (producto) {
    return producto.categoria === "Muebles";
  })
  .map(function (producto) {
    return producto.nombre;
  });

console.log(nombresMuebles);
