/*console.log("Primitives vs References");

let age = 18;
const name = "Jose";
let age2 = age;

age = 25;

console.log('Numbers let', age, age2);


// es una referencia
const person = {
    age: 18,
    name: 'Jose',
    isAdult: true,
};

// age = 20;
// person.age = 20; // esto es permitido

const person2 = person;

person.age = 20;
console.log(person.age);
person2.age = 25;

console.log(person.age, person2.age);
//console.log(age);

function sum(a, b) {
    a.x = 10;

    return a.x + b;

}

const obj = {
    x: 100,
}
// el pase de parametro fue por referencia
// el pase de parametro fue por 'valor' (primitivo)
console.log( sum(obj, 11)  );

console.log(obj);*/


const obj = {
    name: 'jose',
    age: 10,
    isAdult: true,
}
const values = [1, 10];

// Destructuring
/*
function sayHello(person, values){
    const age = 5;
    const { age: aliasAge , name } = person;
    const [ val1, val2, valN ] = values;
    console.log(val1, val2, valN);

  
    console.log(`Hola soy ${name} tengo ${age + aliasAge} años`);

}

sayHello(obj, values);*/

// Spread operator or Rest

const bigObject = {
    id: 1,
    random: Math.random(),
    prop: 'XYZ',
    ...obj,
}

/*const bigArrayOfValues = [
     50, 10, 30, ...values
];

// Rest parameters
function sum( a, b,  ...values){
    let result = 0;

    for(let i = 0; i < values.length; i++){
        result += values[i];
    }

    return result;
}

console.log( sum(1,2,3,4,5,6,7) );*/
/*let key = "random"; 

//console.log( bigObject[key] );

const keys = Object.keys(bigObject);

for(let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    const value = bigObject[currentKey];
    console.log(currentKey, " : ", value);
}
*/







