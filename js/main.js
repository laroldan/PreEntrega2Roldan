const productos = [
  { id: 1, nombre: "Milanesa", precio: 1199 },
  { id: 2, nombre: "Hamburguesa", precio: 2199 },
  { id: 3, nombre: "Fideos", precio: 1000 },
  { id: 4, nombre: "Merluza", precio: 1420 },
  { id: 5, nombre: "Papas Fritas", precio: 899 },
  { id: 6, nombre: "Arroz", precio: 749 },
  { id: 7, nombre: "Parrillada", precio: 3999 },
  { id: 8, nombre: "Ensalada", precio: 1000 },
  { id: 9, nombre: "Tequeños", precio: 1370 },
  { id: 10, nombre: "Puchero", precio: 1299 },
];

const compra = [];

let totalCompra = 0;
let nombre;
let apellido;
let nuevo;

//functions

function mayorQue(n) {
  return (m) => m > n;
}

function Plato(comida, cant, precio) {
  this.nombre = comida;
  this.cantidad = cant;
  this.precio = precio;
}

function agregar() {
  compra.push(nuevo);
}

//LISTA DE COMIDAS POR CONSOLA

const listado = document.querySelector("#listado");
listado.addEventListener("click", () => {
  console.log("◘ LISTADO DE PLATOS");
  console.log("--------------");
  productos.forEach((producto) => {
    console.log(producto.nombre + " $" + producto.precio);
  });
  console.log("--------------");
  alert("LISTA GENERADA EN CONSOLA\nF12 para visualizar.");
});

//EMPEZAR CON LA COMPRA

let comenzar = document.querySelector("#comenzar");
comenzar.addEventListener("click", () => {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido");

  totalCompra = 0;

  let prod = prompt("Diganos que desea comer:");
  let cant = prompt("Cuantos platos de " + prod + " quiere?");

  let encontrado = productos.find((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });
  console.log(encontrado);

  let encontrado2 = productos.some((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });

  if (encontrado2 == true) {
    alert("Producto encontrado correctamente.");
  } else {
    alert("Producto no encontrado.");

    //cuenta de precio * cant
    let posicion = productos.indexOf(encontrado);
    totalCompra += productos[posicion].precio * cant;

    //pushea el prod pedido y cantidad a nuevo array
    nuevo = new Plato(
      productos[posicion].nombre,
      cant,
      productos[posicion].precio
    );
    agregar();
  }

  //cuenta al total

  let posicion = productos.indexOf(encontrado);
  totalCompra += productos[posicion].precio * cant;
  //console.log(totalCompra);

  //

  let opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");

  while (opcion != 0) {
    let prod = prompt("Diganos que más desea comer:");
    let cant = prompt("Cuantos platos de " + prod + " quiere?");

    let encontrado = productos.find((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });
    console.log(encontrado);

    let encontrado2 = productos.some((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });

    if (encontrado2 == true) {
      alert("Producto encontrado correctamente.");
    } else {
      alert("Producto no encontrado.");

      //cuenta de precio * cant
      let posicion = productos.indexOf(encontrado);
      totalCompra += productos[posicion].precio * cant;

      //pushea el prod pedido y cantidad a nuevo array
      nuevo = new Plato(
        productos[posicion].nombre,
        cant,
        productos[posicion].precio
      );
      agregar();
    }
    opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");
  }
  console.log(compra);
});

//CARRITO POR CONSOLA

const carrito = document.querySelector("#carrito");
carrito.addEventListener("click", () => {
  if (totalCompra == 0) {
    alert("USTED NO INGRESO NADA EN EL CARRITO");
    console.log("USTED NO INGRESO NADA EN EL CARRITO");
  }
  while (totalCompra != 0) {}
});
