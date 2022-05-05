// ES2015 = ES6
// Nuevas formas de declarar variables

let pokemon = "Charmaner //";
pokemon = "Charizar";

const age = 18;


// Template string literal

//const greet = "Hola me llamo " + pokemon + " y tengo "+ age +" años";

// backticks

const greet = `Hola me llamo ${pokemon} y tengo ${age} años.`;

//console.log(greet);

// ES6+ Way to write a function
// Arrow function
const sayHelloV2 = (pokemonName, age = 8) => {
    return `Hola soy ${pokemonName} y tengo ${age} años`;
}