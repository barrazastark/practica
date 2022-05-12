
// find
const array = [10,20,30,40,50];
const elToFind = 30;

const findEl = array.find((el) => {
    return el === elToFind;
});

/*if (findEl) {
    console.log("Lo encontró");
}*/

// devuelve -1 sino lo encuentra
// findIndex
const findElIndex = array.findIndex((el) => {
    return el === elToFind;
});

// array[findElIndex] = true;

//console.log(array);

// map
// procesar/transformar datos

const transformedData = array.map((el) => {
    return {
        id: el,
        extraProp: `extraValue-${el}`
    };
});

// console.log(transformedData);

// filter
const delete40 = 40;
const greaterThan20 = array.filter((el) => {

    // logica
    if(el !== 40){
        return true;
    }

    return false;

});

console.log(greaterThan20);

// reduce

const total = array.reduce((accumulator, current) => {
  
    return accumulator + current;


}, 0);

// ALGORITMO DE ENTREVISTA
// ESCRIBE UNA FUNCION QUE RECIBA UNA PALABRA STRING Y RETORNE LA LETRA MAS REPETIDA

function getMostRepeatedLetter(palabra) {
    let max = -1;
    let maxLetter = '';

    palabra.split("").reduce((acc, current) => {
    
        if(acc[current]){
            acc[current] = acc[current] + 1;
        }
        else {
            acc[current] = 1;
        }
    
        if(acc[current] > max) {
            max = acc[current];
            maxLetter = current;
        }
    
        return acc;
    
    }, {});

    return {
        letter: maxLetter,
        total: max,
    }

}

console.log(getMostRepeatedLetter("Hola"));
console.log(getMostRepeatedLetter("Holaa"));
