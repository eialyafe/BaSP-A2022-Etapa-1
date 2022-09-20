console.log ('EXCERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
// for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log ('EXCERCISE 5.a');

var products = ['mobile', 'computer', 'tablet', 'headphone', 'video card'];

for (var contador = 0; contador <products.length; contador ++) {
    alert(products[contador]);
}

// b. Al array anterior convertir la primera letra de cada palabra
//  en mayúscula y mostrar una alerta por cada palabra modificada.
console.log ('EXCERCISE 5.b');

for (var contador = 0; contador <products.length; contador ++) {
    alert ((products[contador].substring(0,1)). toUpperCase() + (products[contador]). substring(1));
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle
// for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena
// completa.
console.log ('EXCERCISE 5.c');

var sentence = '';
for (var index = 0; index <products.length; index ++) {
    sentence += products[index] + ' ';
}
alert (sentence);

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el
// número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log ('EXCERCISE 5.d');

var nums = []
for (var count =0; count < 10; count ++) {
    nums.push(count);
}
console.log(nums);