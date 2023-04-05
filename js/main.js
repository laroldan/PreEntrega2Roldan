const productos = [
  { id: 1, nombre: "Milanesa", precio: 1199 },
  { id: 2, nombre: "Hamburguesa", precio: 2199 },
  { id: 3, nombre: "Fideos", precio: 1000 },
  { id: 4, nombre: "Merluza", precio: 1420 },
  { id: 5, nombre: "Papas Fritas", precio: 899 },
  { id: 6, nombre: "Arroz", precio: 749 },
  { id: 7, nombre: "Parrillada", precio: 3999 },
  { id: 8, nombre: "Ensalada", precio: 1000 },
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

let totalCompra = 0;
let opcion;
let nombre;
let apellido;

//usar prompts para luego usar find

let ola = prompt("Ingrese prod:");
const encontrado = productos.find((prod) => {
  return prod.nombre == ola;
});
console.log(encontrado);

//mayor que NUMERO para descuento
function mayorQue(n) {
  return (m) => m > n;
}

//descuento a partir de $4000
let Descuento = mayorQue(4000);
console.log(Descuento(totalCompra));

//COMIENZO

let comenzar = document.querySelector("#comenzar");
comenzar.addEventListener("click", () => {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido");
});

