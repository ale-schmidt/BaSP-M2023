console.log("Ejercicio 6 - Functions");

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log("-Ejercicio 6.a:");

var num1 = 3;
var num2 = 5;

var result;

function suma(num1, num2) {
  return num1 + num2;
}

result = suma(num1, num2);

console.log(result);

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número;
// de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("-Ejercicio 6.b:");

var num1 = "hola";
var num2 = 5;

var result;

function suma(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2;
  } else {
    alert("uno de los parámetros tiene error");
    return NaN;
  }
}

result = suma(num1, num2);

console.log(result);

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log("-Ejercicio 6.c:");

var num = 7.4;

function validateInteger(num) {
  return num % 1 === 0;
}

console.log(validateInteger(num));

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
// y que valide que los números sean enteros.
// En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log("-Ejercicio 6.d:");

var num1 = 1.5;
var num2 = 5;

var result;

function sumaEnteros(num1, num2) {
  if (
    typeof num1 == "number" &&
    typeof num2 == "number" &&
    validateInteger(num1) &&
    validateInteger(num2)
  ) {
    return num1 + num2;
  } else if (typeof num1 == "number" && typeof num2 == "number") {
    alert("uno de los parámetros tiene error");
    return Math.round(num1) + Math.round(num2);
  } else {
    alert("uno de los parámetros tiene error");
    return NaN;
  }
}

result = sumaEnteros(num1, num2);

console.log(result);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo
// siga funcionando igual que en el apartado anterior.

function valEnteros(num) {
  if (typeof num == "number" && validateInteger(num)) {
    return num;
  } else if (typeof num == "number") {
    alert("uno de los parámetros tiene error");
    return Math.round(num);
  } else {
    alert("uno de los parámetros tiene error");
    return NaN;
  }
}

function llamarValEnteros(num1, num2) {
  let val1 = valEnteros(num1);
  let val2 = valEnteros(num2);
  if (val1 === "number" && val2 === "number") {
    return val1 + val2;
  }
  alert("uno de los parámetros tiene error");
  return NaN;
}

console.log(llamarValEnteros(num1, num2));
