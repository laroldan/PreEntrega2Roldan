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

const integrantes = [
  "Lautaro",
  "Matias",
  "Mariano",
  "Julian",
  "Nicolas",
  "Tobias",
  "Leandro",
  "Nahuel",
  "Tomas",
];

const compra = [];

let totalCompra = 0;
let nombre;
let apellido;

//usar prompts para luego usar find

//mayor que NUMERO para descuento
//descuento a partir de $4000
function mayorQue(n) {
  return (m) => m > n;
}

let Descuento = mayorQue(4000);
console.log(Descuento(totalCompra));

//LISTA DE COMIDAS POR CONSOLA

//EMPEZAR CON LA COMPRA

let comenzar = document.querySelector("#comenzar");
comenzar.addEventListener("click", () => {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido");
  let prod = prompt("Diganos que desea comer:");
  let cant = prompt("Cuantos platos de " + prod + " quiere?");

  const encontrado = productos.find((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });
  console.log(encontrado);

  const encontrado2 = productos.some((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });

  if (encontrado2 == true) {
    alert("Producto encontrado correctamente.");
  } else {
    alert("Producto no encontrado.");
  }

  let opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");

  while (opcion != 0) {
    let prod = prompt("Diganos que más desea comer:");
    let cant = prompt("Cuantos platos de " + prod + " quiere?");

    const encontrado = productos.find((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });
    console.log(encontrado);

    const encontrado2 = productos.some((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });

    if (encontrado2 == true) {
      alert("Producto encontrado correctamente.");
    } else {
      alert("Producto no encontrado.");
    }

    opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");
  }
});

//CARRITO POR CONSOLA
