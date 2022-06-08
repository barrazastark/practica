
// import "./reset.css";
//import './tiposDeDatos';
//import "./es6.js";
//import "./controlFlow";
//import "./functions";
//import "./arrayAndLoops";
// import "./DOMManipulation";
//import "./primitivesVsReferences";
// import "./arrayMethods";
//import "./classes";
//import "./functionsAdvanced";
//import "./memoization";
// import "./ajax";
// import "./promises";
// import "./objects"
/*
    JS: client-side, dinamicamente tipado, debilmente tipado,
        asincrono, single-thread, non-blocking, prototype based programming language
*/



const numbers = [0, 10, 15, 21, 0, 78, 4, 0];

const processNumbers = (arr) => {

    const x = arr.filter(n => !n);
    
    const y = arr.filter(n => n);

    return [...x, ...y];
}

const result = processNumbers(numbers);

console.log(result); // [0,0,0,10,15, 21, 78, 4]




const main = (x = 10) => {
    const map = {};

    return (n) => {
        map[n] = x + n;
        return map;
    }

}

const one = main();

console.log( one(5)['5'] ) // 2 ? 15
console.log( one(5)['5'] ) // 3 ? 15
 
const two = main(10);

console.log( two(5)['5'] ) // 4 ? 15
console.log( two(5)['10'] ) // 5 ? undefined






const config = [
    { letter: "A" }, 
    { letter: "E" }, 
    { letter: "I" }, 
    { letter: "O" }, 
    { letter: "U" }, 
];

config.forEach((c, index) => {
    const { letter } = c;
    const footer = document.getElementById("footer"); // obteniendo el footer (div)
    const el = document.createElement("span"); // creando span al vuelo

    if (index > 0 && index < config.length - 1) {
        el.innerText = config[index + 1].letter;
        footer.append(el)
    }

    else {
        el.innerText = letter;
        footer.append(el)
    }
})





