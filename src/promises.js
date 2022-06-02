console.log("*** PROMISES ***");

// Promise: un objeto especial el resolverá algun valor para el futuro una vez alguna tarea sea cumplida.
/* 
    Una promesa tiene los sigueintes estados

    - Pending
     - fulfilled
     - Rejected
*/

/* const promiseSayHello = new Promise((resolve, reject) => {
    //  saludar

    //resolve("Hello!");

    reject("No se pudo saludar");

});

console.log()

promiseSayHello.then(greet => {

    console.log(greet);

})
.catch(err => {
    console.log(err);
})


console.log(promiseSayHello);
console.log("Esto se ejecutará al final ?"); */

/* const sayHelloWithDelay = (seconds) => {


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(2);
            resolve();

        }, seconds * 1000);

    })

}

console.log(1);
sayHelloWithDelay(5)
    .then(() => {

        console.log("tres");

    });
*/


// services
/* async function getListOfPokemon(){

    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(ENDPOINT); // hasta que no sea fullfilled 
    // no pasa aqui el thred
    if(!response.ok) {
        return Promise.reject("Error getting pokemon");
    }

    const data = await response.json();

    return data;
}


getListOfPokemon()
    .then(realData => {
        console.log(realData);

        // Pintar en la UI
})
.catch(err => {

    // pintar el mensaje en la UI err
    console.log(err);

}) 


const suma = async (a, b) => {
    return a + b;
}

// esto es una promesa
console.log( suma(5, 10) );
*/

// Event Loop
// Mecanismo de javascript que administra y monitorea lo que se va ejecutar en el thread principal

// async code
setTimeout(function done(){

    console.log("1"); // 1

}, 0);
// async code
new Promise((resolve) => {

    resolve();

}).then(() => {

    console.log("2"); // 2

})


function sayMyName(){
    console.log("3"); // 3
}

function sayHello() {
    console.log("4"); // 4

    sayMyName();
}

sayHello();

console.log("5"); // 5


// WEB APIS (Browser)
/*
    alert 
    console.log
    localStorage
    sessionStorage
    cookies
    fetch
    document.addEvenetListern( () => {})
    window
    setTimeout
    setInterval
    onClick

    // son fachadas (facade)
*/

// Micro callback queue (maxima prioridad)
// Promesas


// Macro callback queue
// setTimeout, setInterval, onClick

queueMicrotask(() => {
    console.log("insertando en la cola del micro task");
});

// promises combinators
// Ejecutar muchas promesas al mismo tiempo y ya que se cumplan todas obtener los valores

Promise.allSettled([Promise.resolve("Jose"), Promise.reject(5)])
    .then(promisesValues => {


        console.log(promisesValues);



    });