//La Cocina del código: https://www.youtube.com/watch?v=AvkyOrWkuQc&ab_channel=LaCocinadelC%C3%B3digo
//
// let fruta = "banana";
//
/*
 *   <banana>
 *      |
 *  --I | I--
 *  |   |   |
 *  |   |   |
 *  | fruta |
 *  |       |
 *  =========
 */

//Destructuring, nos permite extraer o desempaquetar valores de un array, o propiedades de un objeto,
//dentro de distintas variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

//También es una buena forma de realizar copias del contenido de una lista u
//objetos (que no tenga un objeto dentro)

const array1 = [5, 10, 20, "hola", false];
const array2 = [...array1];
console.log(array2);

const obj1 = {
  nombre: "Mati",
  apellido: "Sanchez",
  edad: 40,
};

const obj2 = { ...obj1 };
console.log(obj2);

const { edad } = { ...obj1 };
console.log(edad);

//--------------------------------------------------------------
// Enviar una lista destructurada como parámetros de una función
//--------------------------------------------------------------
const func1 = (nombre, apellido, edad) => {
  console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
};

const funct2 = (nombre, apellido, edad, sexo, hijos) => {
  console.log(
    `Mi también es nombre es ${nombre} ${apellido} y tengo ${edad} años`
  );
  console.log(`Ademas mi sexo es ${sexo} y tengo ${hijos} hijos.`);
};

const params = ["Matias", "Sanchez", 40];
const masParams = false;

if (masParams) {
  params.push("Masculino");
  params.push(10);
}

func1(...params);
funct2(...params);
