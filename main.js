//! ADD input caused errors checking

async function gottaFetchEmAll(pokeID){
    let id = pokeID;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const json = await response.json();
    displayPokemon(json);
}

function displayPokemon(json) {
    let pokemonName = document.getElementById('pokemonName');
    let pokemonSprite = document.getElementById('pokemonSprite');
    let name = json.name.toUpperCase();
    pokemonName.innerText = `${name}`;
    pokemonSprite.src = json.sprites.front_default;
}

let inputed = document.getElementById('pokeForm');
inputed.addEventListener('click', function() {
    let form = document.querySelector('form');
    let pokeID = form.elements.inputID.value;
    gottaFetchEmAll(pokeID);
});

let random = document.getElementById('randomButton');
random.addEventListener('click', function(){
    let pokeID = Math.floor(Math.random() * 893) + 1; //893 for the number of pokemon in the API, +1 to make the id non-zero (There are actually 894 pokemon in the API, 893 is used due to the +1 to not result in an id of 895(which doesnt exist), id's start at 1 in the API)
    gottaFetchEmAll(pokeID);
});