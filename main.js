// Declaración de variables
// var / let / const
let variable1 = "hola";
variable1 = 1;

//String
//Number
//Arrays
//Objeto
//Función
//Date

let var3 = function (param) {
  // return "Hola";
  console.log(new Date());
};

var3("5");

let var2 = {
  nombre: "Mati",
  apellido: "Sanchez",
  edad: 1,
  saludo: function () {
    console.log("Hola soy", this.nombre);
    return 4;
  },
  hijos: [
    { nombre: "Hijo 1", apellido: "Apellido 1" },
    { nombre: "Hijo 1", apellido: "Apellido 1" },
  ],
};

// console.log(var2["nombre"]);
// console.log(var2.saludo());
// console.log(var2.hijos);
// console.log(var2.hijos[0].nombre);

let var4 = ["Mati", 5, [1, 2], var2];

// for (let i = 0; i < var4.length; i++) {
//   console.log(">", var4[i]);
// }

let var5 = [1, 5, 23, 123];
//
// let newLength = var5.push(150);
// console.log(newLength, var5);

// var5.map(console.log);
// var5.map((el, index, arr) => {
//   console.log(el);
//   console.log(index);
//   console.log(arr);
// });

// var5.map(imprimirALoSanti);

// function imprimirALoSanti(el, index, arr) {
//   console.log(el);
//   console.log(index);
//   console.log(arr);
// }

const imprimirALoSanti2 = (el, index, arr) => {
  // console.log(el);
  // console.log(index);
  // console.log(arr);
  return el + 7;
};

var5.forEach(imprimirALoSanti2);

let copia = var5.map(imprimirALoSanti2);
// console.log(copia);

let copia2 = var5.map((el) => el + 7);
console.log(copia2);

let encontrado = var5.find((el) => el > 4);
console.log(encontrado);

let filtrado = var5.filter((el) => el > 4);
console.log(filtrado);

let some = var5.some((el) => el > 4);
console.log(some);

// BUSCAR FUNCIÓN REDUCE Y HACER UN EJEMPLO
