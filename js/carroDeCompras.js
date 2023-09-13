let articulosAgregados = [];
let precioTotal = 0;

function ejecutarPromp() {
  let articulos = parseInt(prompt("Cuantos articulos va a agregar?"));

  let agregados = 1;

  while (agregados <= articulos) {
    agregarArticulo();
    agregados++;
  }

  if (articulosAgregados.length > 0) {
    calcularPrecio();
  } else {
    alert("No se ingresaron articulos");
  }
}

function agregarArticulo() {
  articulosAgregados.push({
    nombreArticulo: prompt("Nombre de el articulo elegido"),
    precioArticulo: Number(
      prompt("¿Cuál es el precio de tu Articulo elegido?")
    ),
  });
}

function calcularPrecio() {
  let mensaje = "Los articulos agregados son:\n";
  for (let i = 0; i < articulosAgregados.length; i++) {
    mensaje += articulosAgregados[i].nombreArticulo + "\n";
    precioTotal += articulosAgregados[i].precioArticulo;
  }
  let descuento = calcularDescuento();
  console.log(mensaje);
  alert(
    "El precio total es: " + precioTotal + " y el descuento es: " + descuento
  );
}

function calcularDescuento() {
  let descuento = 0;
  if (precioTotal >= 5000 && precioTotal < 7000) {
    return precioTotal * 0.25;
  } else if (precioTotal >= 7000) {
    return precioTotal * 0.45;
  }

  return descuento;
}

ejecutarPromp();
