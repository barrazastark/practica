console.log("*** Memoization ***")

const memo = (pureFn) => {

    const cache = {};

    return (...args) => {

        const key = String(args);

        if(cache[key]) {
            return cache[key];
        }

        console.log("Se calculó", key);

        cache[key] = pureFn(...args);
        return cache[key];

    }

}

const fibMemoized = memo(function fib(n) {
    
    if (n === 1 || n === 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
});

const r1 = fibMemoized(10); // 55 , se calculó
const r2 = fibMemoized(11); // calcular 
const r3 = fibMemoized(11); // 


const suma = memo((a, b) => {
    return a + b;
});

const s1 = suma(10, 30);// se calcula
const s2 = suma(10, 30);


const s3 = suma(50, 10);// se calcula

console.log(r1, r2, r3);
console.log(s1, s2, s3);

// 

// write the code needed that satifies this: add(5)(3) === 8 // true
// add(5)(3) === 8 -> true


const add = (val1) => 
    (val2) => 
        val1 + val2;

console.log( add(5)(3) === 8 )
