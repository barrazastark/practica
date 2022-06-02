
// "Herencia"


// console.log( "Holao".indexOf('o') );


// "clase"

// patter consctructor
function Person(name){
    // console.log(this);
    this.name = name;

}

Person.prototype.sayHello = function() {
    console.log(`Hola soy ${this.name}`);
}

const p1 = new Person("Jose");

console.log(p1.sayHello());

const p2 = {
    name: "Bardu",
    sayHello: function() {
        console.log(`Hola soy ${this.name}`);
    }
}

console.log(p2.sayHello());

// FUNC DECLARATION vs ARROW function

// ES6+ - Sugar syntax for patter constructor
class PersonV2 {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hola soy ${this.name}`);
        // this.otroMetodoQueNoTengoPeroHerede();
    }
}


const p3 = new PersonV2("Barraza");


// Todos los objetos tienen una propiedad prototype

// Prototype tiene todos los metodos de el objeto en cuestion

console.log(p3);

// __proto__ es el prototype del objeto

const p4 = {
    name: 'Cheypi'
};


// Herencia, prototype chain
p4.__proto__ = p3.__proto__;

p4.sayHelloX();

// Javascript es orientado a prototipos
