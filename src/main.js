const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((res) => {
      return res.json();
    })
    .then((resJSON) => {
      resJSON.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
};

const fetchPokemonData = (pokemon) => {
  fetch(pokemon.url)
    .then((res) => {
      return res.json();
    })
    .then((resJSON) => {
      console.log(resJSON);
      renderData(resJSON)
    });
};

const renderData = (pokeData) => {
  const container = document.querySelector("#container");

  const pokemonContainer = document.createElement("div");
  const name = document.createElement("h2");
  name.innerHTML = pokeData.name;

  const id = document.createElement("p");
  id.innerHTML = `N° ${pokeData.id}`;

  const type = document.createElement("ul")

  pokemonContainer.appendChild(name);
  pokemonContainer.appendChild(id);
  container.appendChild(pokemonContainer);
}

fetchPokemon();
