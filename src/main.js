const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((res) => res.json())
    .then((resJSON) => {
      resJSON.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
};

const fetchPokemonData = (pokemon) => {
  fetch(pokemon.url)
    .then((res) => res.json())
    .then((resJSON) => {
      renderData(resJSON);
    });
};

const renderData = (pokeData) => {
  const container = document.querySelector("#container");
  const divs = [...container.children];
  divs.sort((a, b) => a.id - b.id);
  divs.forEach((div) => container.appendChild(div));

  const pokemonContainer = document.createElement("div");
  pokemonContainer.id = `${pokeData.id}`;
  pokemonContainer.classList = "";

  const name = document.createElement("h2");
  name.innerHTML = pokeData.name;

  const id = document.createElement("p");
  id.innerHTML = `N° ${pokeData.id}`;

  const type = document.createElement("ul");
  const sprite = document.createElement("div");

  createTypes(pokeData.types, type);
  createPokeImage(pokeData.sprites, sprite);

  pokemonContainer.append(name, id, sprite, type);
  if (pokemonContainer.id) {
  }
  container.appendChild(pokemonContainer);
};

const createTypes = (types, ul) => {
  types.forEach((type) => {
    const typeLi = document.createElement("li");
    typeLi.innerHTML = type["type"]["name"];
    ul.appendChild(typeLi);
  });
};

const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  div.appendChild(pokeImage);
};

fetchPokemon();
