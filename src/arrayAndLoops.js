
console.log(P);
var P = "P";

X();

function X() {
    //console.log(y)
    var y = 'Y';
    //console.log('inside x function');
    // otra()
}

const pokemons = [
    {
        id: 1,
        name: 'charmander',
        category: 'fire'
    },
    {
        id: 2,
        name: 'Snorlax',
        category: 'normal'
    },
    {
        id: 3,
        name: 'Mew',
        category: 'superior',
    }
];



function findPokemonById(id) {

    let pokemon = null;

    for (let index = 0; index < pokemons.length; index++) {
    
        const element = pokemons[index];
    
        /*if(element.name != 'Snorlax') {
            continue;
        }*/
    
        if(id === element.id) {
            pokemon = element;
            break;
        }
    
    
    } 

    return pokemon;

}

pokemons.forEach(function(el) {
    //console.log(el);
});

console.log(findPokemonById(1));


// 
console.log(w);
let w = "Ww";

// const y let : 