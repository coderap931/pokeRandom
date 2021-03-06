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
    let factList = document.getElementById('factList');
    let factID = document.createElement('li');
    let id = json.id;
    factID.innerText = `Your Pokémon's ID: ${id}`;
    factList.appendChild(factID);

    let typeLength = json.types.length;
    let factTypes = document.createElement('li');
    let inner = '';
    for(i=0; i < typeLength; i++){
        let newType = json.types[i].type.name;
        let upperType = newType.toUpperCase();
        if(i == 0){
            let newInner = upperType;
            inner = newInner;
        } else {
            let newInner = `${inner}, ${upperType}`;
            inner = newInner;
        }
        factTypes.innerText = `Your Pokémon is of Type(s): ${inner}`;
    }
    factList.appendChild(factTypes);

    let factHeight = document.createElement('li');
    let height = json.height;
    factHeight.innerText = `Your Pokémon's Height(in decimeters): ${height}`;
    factList.appendChild(factHeight);

    let factWeight = document.createElement('li');
    let weight = json.weight;
    factWeight.innerText = `Your Pokémon's Weight(in hectograms): ${weight}`;
    factList.appendChild(factWeight);
}

let random = document.getElementById('randomButton');
random.addEventListener('click', function(){
    let pokemon = document.getElementById('pokemon');
    pokemon.style = 'width: 30%; border: 8px solid black;';
    let pokemonIs = document.getElementById('pokemonIs');
    pokemonIs.style = 'opacity: 100%;';
    let pokemonFacts = document.getElementById('pokemonFacts');
    pokemonFacts.style = 'opacity: 100%';
    if(factList.innerText != ''){
        factList.innerText = '';
        let pokeID = Math.floor(Math.random() * 893) + 1; //893 for the number of pokemon in the API, +1 to make the id non-zero (There are actually 894 pokemon in the API, 893 is used due to the +1 to not result in an id of 895(which doesnt exist), id's start at 1 in the API)
        gottaFetchEmAll(pokeID);
    } else {
        let pokeID = Math.floor(Math.random() * 893) + 1;
        gottaFetchEmAll(pokeID);
    }
});