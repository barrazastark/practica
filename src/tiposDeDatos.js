// Datos = variables

 // ; significa fin de la instruccion

// *** PRIMITIVOS ***

// string - cadena alfanumerica
var pokemonName = "Charmander";
var categoria = "Fuego 28 xyz @ _ w.com";
var img = "http://algo.jpg";
//console.log(typeof  pokemonName);

// number (ej: 1,2, 7.4) // NaN "string" / 10
var age;
age = 5;
// ...
//console.log(typeof age);

// boolean (true, false)
var charmanderCanEvol = true;
//console.log(typeof charmanderCanEvol);

// undefined
var lastEvol;
//console.log(lastEvol);

// null
var nextEvol = null;
//console.log(typeof nextEvol, "*** * ** * * * * ** * ** * * **"); // object
// error - no fix :(

// Symbol
var charmanderKey = Symbol("LLAVE SECRETA");
//console.log(typeof charmanderKey);


// Coercion: Mecanisco que usa js para convertir un tipo de dato a otro tipo de dato;

// si hay un string, convertirá a string

// true = 1, false = 0


// truthy values y falsy values
/*
    Falsy values: "", 0, null, undefined, NaN
    Truthy values: cualquiera que no sea falsy value, [], {}
*/


// *** NO PRIMITIVOS ***

// Object - estructura de datos que contiene otros datos

// JSON Notation - Javascript Object Notation
// conjuntos de pares, [key]: value

var myPokemon = {
    name: 'Charizar',
    age: 28,
    canEvol: false,
};

//console.log(typeof myPokemon, myPokemon);

// aceder a los valores con el DOT Notation
//console.log(myPokemon.name);

// Array: estructura de datos con valores heterogeneos.

var abilities = ['Lanza llamas', 'Embestida', 28, true, null];

// es un sub tipo de object
//console.log(typeof abilities, Array.isArray(abilities));

// Para acceder a un arreglo es por indices

//console.log(abilities[0], abilities[100]);

// Date, function, Map, etc -> Object


