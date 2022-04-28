// function declaration
function sayHello(pokemonName, age = 8) {
    return `Hola soy ${pokemonName} y tengo ${age} años`;
}

// invocar = usar la funcion

/*
    tODAS Las funciones retornan algo

*/
 
const greet = sayHello("Charmander"); // se invocó - tomo 2ms

//console.log("RESULTADO: ", greet);

const g1 = sayHello("Charmander", 10); // 2ms
const g2 = sayHello("Pikachu"); // 2ms


// ES6+ Way to write a function
// Arrow function
const sayHelloV2 = (pokemonName, age = 8) => {
    return `Hola soy ${pokemonName} y tengo ${age} años`;
}

const g3 = sayHelloV2("esnorlax", 30); // 2ms
console.log(g3);

// Arrow function no remplaza a la function declaration