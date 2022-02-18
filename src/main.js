const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=27")
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
  pokemonContainer.className = "bg-white p-6 rounded-lg shadow-xl text-center cursor-pointer hover:-translate-y-1 transition-all duration-200";

  const name = document.createElement("h2");
  name.innerHTML = pokeData.name;
  name.className = "mb-2 font-bold text-2xl text-gray-600";

  const id = document.createElement("p");
  id.innerHTML = `N° ${pokeData.id}`;

  const type = document.createElement("ul");
  const sprite = document.createElement("div");
  sprite.classList = "flex flex-col justify-center items-center";

  createTypes(pokeData.types, type);
  createPokeImage(pokeData.sprites, sprite);

  pokemonContainer.append(name, id, sprite, type);
  container.appendChild(pokemonContainer);
};

const createTypes = (types, ul) => {
  types.forEach((type) => {
    const typeLi = document.createElement("li");
    typeLi.classList = "text-gray-500";
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
