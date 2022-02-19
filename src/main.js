const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
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
  const gifSprite = pokeData.sprites.versions["generation-v"]["black-white"].animated;

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
  type.classList = "";

  const sprite = document.createElement("div");
  sprite.classList = "flex flex-col justify-center items-center";

  createTypes(pokeData.types, type);
  createPokeImage(gifSprite, sprite);

  pokemonContainer.append(sprite, id, name, type);
  container.appendChild(pokemonContainer);
};

const createTypes = (types, ul) => {
  types.forEach((type) => {
    const typeP = document.createElement("li");
    typeP.classList = "text-gray-500";
    typeP.innerHTML = type["type"]["name"];
    ul.appendChild(typeP);
  });
};

const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  div.appendChild(pokeImage);
};

fetchPokemon();
