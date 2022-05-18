// function declaration
function sumV1(a, b, message) {
    message(a + b);
    return a + b;
}

// function expression
const sumV2 = function(a, b = 10) {
    return a + b;
}

// arrow function
const sumV3 = (a, b) => a + b;

// First class function
/*
    - Puede ser guardada en una variable
    - Puede recibir una funcion como parametro
    - Puede retornar funciones
*/

sumV3(10, 5);

// callbacks
sumV1(10, 5, (total) => {
    console.log("Los numero han sido sumados y el total fue", total);
});

// find recibe un callback;
// [1,2,3].find((el) => {});


const counter = (initialValue = 1) => {

    let value = initialValue;

    return () => {
        value = value + 1;
        return value;
    }

}

const c1 = counter();
const c2 = counter(5);

//console.log( c2(5) ); // 

let val = c1(); // 11

val = c1(); // 12
val = c1(); // 13


console.log(val);


// Closure: 
/** [[scope]] : {
 *  value: x,
 *  initialValue: x
 * }
 * 
 * Mecanismo de javascript que ocurre cuando una funcion interna es retornada dentro de otra,
 * y esa funcion sigue recorrando los parametros y variable de su outer scope,
 * 
 * Note: la funcion interna tiene una propiedad oculta llamada [[scope]] la cual tiene todos los valores de su
 * outer scope (vadiable y parametros)
 * 
 */

// Pure functions
/*
    Dado los mismo argumentos/parametros siempre retorna el mismo resultado,

    cuando no ? 

    cuando haya algun side effect
    side effect: 

*/

function suma(a, b) {
    return a + b;
}

// Ejercicio de entrevista

// 1 1 2 3 5 8 13 21 34 55 ... infinito

function fib(n) {
    
    if (n === 1 || n === 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

const result = fib(10); // computed expensive

const result2 = fib(10); // computed expensive

console.log(result, result2)

// memoization: tecnica de performance para capturar o cachear valores