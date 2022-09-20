console.log ('EXCERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y
// convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log ('EXCERCISE 2.a');

var lowerCaseComent = 'this sentence is written in lower case letters';
var transformToUpperCase = lowerCaseComent.toUpperCase();

console.log ('Same sentence in upper case letters', transformToUpperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
// los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('EXCERCISE 2.b');

var sentence ='sentence with more than ten characters';
var keepFirst5Characters = sentence. substring(0,5);

console.log (keepFirst5Characters);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('EXCERCISE 2.c');

var newSentence ='sentence with more than ten characters';
var countLetters = newSentence.length
var keepLast3Carachters = newSentence. substring(countLetters-3,countLetters);

console.log (keepLast3Carachters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
// letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
// toUpperCase, toLowerCase y el operador +).
console.log ('EXCERCISE 2.d');

var address = 'avenida brasil esquina libertad';
var firstLetter = address. substring(0,1);
var restLetters =address. substring(1);
var newFormatAddress = (firstLetter.toUpperCase() + restLetters.toLowerCase());

console.log (newFormatAddress);

// e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log ('EXCERCISE 2.e');

var sentenceWithBlank = 'we want ot find the blancks';
var findTheBlank = sentenceWithBlank. indexOf (' ');

console.log(findTheBlank);

// f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
// y el operador +).
console.log ('EXCERCISE 2.f');

var twoWords =  'we are learning javascript';
var firstLetter = twoWords. substring (0,1);
var firstBlank = twoWords. indexOf (' ');
var secondWordLetterIndex = (firstBlank + 1);
var secondWordLetter = twoWords. substring (secondWordLetterIndex,secondWordLetterIndex + 1);
var finalSentence = (firstLetter. toUpperCase() + (twoWords. substring (1,secondWordLetterIndex)). toLowerCase()
+ secondWordLetter. toUpperCase() + (twoWords. substring (secondWordLetterIndex + 1)). toLowerCase());

console.log (finalSentence);