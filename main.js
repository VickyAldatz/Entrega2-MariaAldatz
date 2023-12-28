class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.incluirMaceta = false; // Nueva propiedad para indicar si se debe incluir una maceta
  }
}

class CarritoDeCompras {
  constructor() {
    this.items = [];
    this.precioMaceta = 5000;
  }

  agregarAlCarrito(producto, cantidad) {
    this.items.push({ producto, cantidad });
    alert(`Se ha agregado ${cantidad} ${producto.nombre}(s) al carrito.`);
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.producto.precio * item.cantidad;

      // Agregar el costo de la maceta solo si incluye maceta
      if (item.producto.incluirMaceta) {
        total += this.precioMaceta * item.cantidad;
      }
    }

    alert(`Total a pagar: $${total}`);
  }
}

const monstera = new Producto('Monstera', 15000);
const agapanthus = new Producto('Agapanthus', 12000);
const jazmin = new Producto('Jazmín', 10000);

const carrito = new CarritoDeCompras();

function mostrarProductosConMenu() {
  alert("Seleccione una planta (ingrese el número):");
  const opciones = [monstera, agapanthus, jazmin];
  
  opciones.forEach((producto, index) => {
    alert(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  });
}

mostrarProductosConMenu();

while (true) {
  const opcionSeleccionada = parseInt(prompt("Ingrese el número de la planta (o 0 para terminar):"), 10);

  if (opcionSeleccionada === 0) {
    break; // Salir del bucle si el usuario ingresa 0
  }

  const productoElegido = [monstera, agapanthus, jazmin][opcionSeleccionada - 1];

  if (productoElegido) {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoElegido.nombre}(s):`), 10);

    // Preguntar al usuario si desea agregar una maceta para esta planta
    const incluirMaceta = confirm(`¿Desea agregar una maceta por $5000 adicionales para ${productoElegido.nombre}?`);
    productoElegido.incluirMaceta = incluirMaceta;

    carrito.agregarAlCarrito(productoElegido, cantidad);
  } else {
    alert("Opción no válida. Por favor, elija una opción del menú.");
  }
}

carrito.calcularTotal();