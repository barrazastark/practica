// DOM = Document Object Model
// Document = HTML Markup

const pokemons = [
    {
        id: 1,
        name: 'charmander',
        category: 'fire',
        img: 4,
        description: "Este es el primer pokemon",
    },
    {
        id: 2,
        name: 'bulbasur',
        category: 'grass',
        img: 1,
        description: "Este es el segundo pokemon",
    },
    {
        id: 3,
        name: 'Squartul',
        category: 'water',
        img: 7
    }
];

function handleClick(event) {
    const ID = event.currentTarget.id;
    const modal = document.getElementById('modal');

    let pokemon = null;
    for (let i = 0; i < pokemons.length; i++){
        if(ID === String(pokemons[i].id)) {
            pokemon = pokemons[i];
            break;
        }
    }

    modal.innerHTML = `
        <p>${pokemon.name}</p>
        <p>${pokemon.description || 'Default'}</p>
    `;
    console.log(modal);
}

function renderPokemons() {
    const container = document.getElementById("container");

    for(let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];

        const div = document.createElement("div");
        div.setAttribute("id", pokemon.id);
        div.classList.add("card");
        div.classList.add(`card-${pokemon.category}`);

        div.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.img}.png" />
            <p>${pokemon.name}</p>
        `;

        container.append(div);
        //await sleep(3);// 
    }

    // aqui asumo que los cards ya estan en la pagina
    const cards = document.getElementsByClassName("card");

    Array.from(cards).forEach(function(card) {
        card.addEventListener("click", handleClick);
    });

}

renderPokemons();