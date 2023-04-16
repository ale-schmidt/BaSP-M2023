console.log("Ejercicio 3 - Arrays");

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log("-Ejercicio 2.a:");

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log(meses[4]);
console.log(meses[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("-Ejercicio 2.b:");

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

months.sort();

console.log(months);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("-Ejercicio 2.c:");

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

months.unshift("Element at the beginning");
months.push("Element at the end");

console.log(months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("-Ejercicio 2.d:");

var months = [
  "Element at the beginning",
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
  "Element at the end",
];

var firstElement = months.shift();
var lastElement = months.pop();

console.log(months);
console.log(firstElement);
console.log(lastElement);

// e. Invertir el orden del array (utilizar reverse).

console.log("-Ejercicio 2.e:");

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var invertedList = months.reverse();

console.log(invertedList);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("-Ejercicio 2.f:");

var months = [
  "Diciembre",
  "Noviembre",
  "Octubre",
  "Septiembre",
  "Agosto",
  "Julio",
  "Junio",
  "Mayo",
  "Abril",
  "Marzo",
  "Febrero",
  "Enero",
];

var joinedMonths = months.join("-");

console.log(joinedMonths);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("-Ejercicio 2.g:");

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var monthsListCopy = months.slice(4, 11);

console.log(monthsListCopy);
