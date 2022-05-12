
const name = Boolean("Jose");


console.log(name);

if(name) {
    console.log('valido')
}


const age = 25;

console.log( typeof age, typeof String(age) );


console.log( Math.round(10.49) );
console.log( Math.trunc(10.99) );
console.log( Math.ceil(10.01) );
console.log(Math.round(Math.random() * 10));


console.log(  new Date().getMonth() + 1 )

console.log( new Date(1993, 6, 18))

const start = Date.now();
console.log(start);
for(let i = 0; i < 500; i++){
    console.log("Hola");
}

const end = Date.now();

console.log(end - start);


