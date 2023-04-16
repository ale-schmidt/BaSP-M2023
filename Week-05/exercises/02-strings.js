console.log("Ejercicio 2 - Strings");

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log("-Ejercicio 2.a:");

var text = "Hello world!";

var textMayusc = text.toUpperCase();

console.log(textMayusc);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Ejercicio 2.b:");

var text = "This a relative long text";
var firstFiveText = text.substring(0, 5);

console.log(firstFiveText);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Ejercicio 2.c:");

var text = "This a relative long text";
var lastThreeText = text.substring(text.length - 3);

console.log(lastThreeText);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log("-Ejercicio 2.d:");

var originalString = "eXAMPLEsTRING";

var firstLetter = originalString.substring(0, 1);
var restOfWord = originalString.substring(1).toLowerCase();

var capitalizedString = firstLetter.toUpperCase() + restOfWord;

console.log(capitalizedString);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Ejercicio 2.e:");

var string = "Hello World!";
var spacePsotion = string.indexOf(" ");

console.log(spacePsotion);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Ejercicio 2.f:");

var originalString = "longWorld superLongWorld";
var firstSpace = originalString.indexOf(" ");
var firstWord = originalString.substring(0, firstSpace);
var secondWord = originalString.substring(firstSpace + 1);
var newString =
  originalString.charAt(0).toUpperCase() +
  firstWord.slice(1).toLowerCase() +
  " " +
  secondWord.charAt(0).toUpperCase() +
  secondWord.slice(1).toLowerCase();

console.log(newString);
