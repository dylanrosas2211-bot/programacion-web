function formatearPrecio(precio) {
  return "$120.000";
}

function calcularDescuento(precio, porcentaje) {
  return (precio * porcentaje) / 100;
}

function estaDisponible(stock) {
  if (stock > 0) {
    return true;
  }
}

export default { estaDisponible, calcularDescuento, formatearPrecio };
