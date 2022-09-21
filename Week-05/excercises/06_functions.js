console.log ('EXCERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
// y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log ('EXCERCISE 6.a');

function add (num1,num2) {
    return num1 + num2;
}
var tot = add (0,3);
console.log (tot);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
// resultado.
console.log ('EXCERCISE 6.b');

function add (num1,num2) {
    if (typeof num1 !== 'number') {
        alert ('You must enter a number');
        return (NaN);
    } else if (typeof num2 !== 'number') {
        alert('You must enter a number');
        return  (NaN);
    } else {
        return (num1 + num2);
    }
}
console. log (add ('hola',3));

// c. Aparte, crear una función validate Integer que reciba un número
// como parámetro y devuelva verdadero si es un número entero.
console.log ('EXCERCISE 6.c');

function validateInteger (num) {
    return Number .isInteger(num);
}
console.log (validateInteger(2));

// d.A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números
// sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero
// (redondeado).
console.log ('EXCERCISE 6.d');

function additionInteger (num1,num2) {
    if (typeof num1 !== 'number') {
        alert ('You must enter a number');
        return (NaN);
    } else if (typeof num2 !== 'number') {
        alert('You must enter a number');
        return  (NaN);
    } else if  (Number.isInteger (num1 + num2)) {
        return (num1 + num2);
    } else {
        alert('You must enter a integer number');
        return Math.round(num1 + num2);
    }
}
console. log (additionInteger (2.5,3));

// e. Convertir la validación del ejercicio 6d) en una función separada y
// llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log ('EXCERCISE 6.e');

function numInvalid(num) {
    if (typeof n !== 'number') {
        alert('You must enter a number');
        return NaN;
    } else if (!numberIsInteger(num)) {
        alert('The number must be an integer');
        return Math.round(num);
    }
    return false;
}
console.log(numInvalid(2.72));
console.log(numInvalid('hola'));

    function addition(num1, num2) {
    var num1Invalid = numInvalid(num1);
    if (num1Invalid || Number.isNaN(numInvalid)) {
        return numInvalid;
    }
    var num2Invalid = numInvalid(num2);
    if (num2Invalid || Number.isNaN(numInvalid)) {
        return numInvalid;
    }
    return num1 + num2;
}
var total = addition('hola', 3);
console.log("Sum with a function: " + total);