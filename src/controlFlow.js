
const age = 10; 
x = 10;

const isAdult = age > 18; // boolean

// Control flow con if / else if / else

if (isAdult) {
    console.log("Edad valida");
}
else if(age == 0) {
    console.log("Es 0");
}
else {
    console.log("No es valida");
}


// Operadores logicos(|| , && , !)

const hasPermission = true;
const idrequired = false;

console.log(!idrequired);
const isPartOfTheClub = false;

const allowedAge = (isAdult || hasPermission || !idrequired);

if(allowedAge && isPartOfTheClub) {
    console.log('Es adulto , tiene permiso o el id no es requerido.');
}

// Ternary Operator
const pokemon = 'charmander';
const category = pokemon == 'charmander' ? 'fire' : 'other';

if(10 > 9 && 8 == 5 || !false) {
    console.log('Entra');
}


// JS Behind the scenes

// existe una funcion main que se ejecuta
// y el thread sincronamente empieza a ejecutar las lienas de 1 a 1