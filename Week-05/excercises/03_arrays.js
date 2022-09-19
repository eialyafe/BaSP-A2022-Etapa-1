console.log ('EXCERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
// "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log ('EXCERCISE 3.a');


var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log ('Months chosen:', months[4], months[10]);

// b.Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('EXCERCISE 3.b');

copyArray = months. slice(0,11)
alphabeticalOrder = copyArray.sort();

console.log(alphabeticalOrder);

// c.Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('EXCERCISE 3.c');

months.unshift('Diciembre 2021');
months.push ('Enero 2023');

console.log (months);

// d.Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('EXCERCISE 3.d');

months.shift('Diciembre 2021');
months.pop ('Enero 2023');

console.log (months);

// e. Invertir el orden del array (utilizar reverse).
console.log ('EXCERCISE 3.e');

copyArray1 = months. slice(0,12)
reverseOrder = copyArray1.reverse();

console.log (reverseOrder);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log ('EXCERCISE 3.f');

joinMonths = months.join('-');

console.log (joinMonths);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log ('EXCERCISE 3.g');

someMonths = months.slice(4,11);

console.log (someMonths);