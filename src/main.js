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
  const container = document.querySelector("#container");

  const pokemonContainer = document.createElement("div");
  pokemonContainer.id = `${pokeData.id}`;
  pokemonContainer.classList = `
  relative
  bg-white 
  p-6 
  rounded-lg 
  shadow-xl 
  text-center 
  cursor-pointer 
  hover:-translate-y-1 transition-all duration-200
  `;

  const id = document.createElement("p");
  id.innerHTML = `#${pokeData.id}`;
  id.classList = `
  text-gray-600 
  text-2xl 
  font-extrabold
  `;

  const gifSprite =
    pokeData.sprites.versions["generation-v"]["black-white"];

  const sprite = document.createElement("div");
  sprite.classList = `
  flex flex-col 
  justify-center 
  items-center
  `;

  const name = document.createElement("h2");
  name.innerHTML = `${pokeData.name}`.toUpperCase();
  name.classList = `
  font-extrabold 
  text-xl 
  text-gray-900 
  mt-5
  `;

  const type = document.createElement("div");
  type.classList = `
  mt-5
  font-bold
  `;

  sortCardsById(container);
  createTypes(pokeData.types, type);
  createPokeImage(gifSprite, sprite);

  pokemonContainer.append(id, sprite, name, type);
  container.appendChild(pokemonContainer);
};

const sortCardsById = (container) => {
  const divs = [...container.children];
  divs.sort((a, b) => a.id - b.id);
  divs.forEach((div) => container.appendChild(div));
};

const createTypes = (types, div) => {
  types.forEach((type) => {
    const typeSpan = document.createElement("span");
    typeSpan.innerHTML = type["type"]["name"].toUpperCase();

    createTypeColor(typeSpan, type);

    div.appendChild(typeSpan);
  });
};

const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  pokeImage.classList = "mt-5";
  div.appendChild(pokeImage);
};

const createTypeColor = (element, type) => {
  if (type["type"]["name"] === "grass") {
    element.classList = "bg-green-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "poison") {
    element.classList = "bg-violet-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fire") {
    element.classList = "bg-orange-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "bug") {
    element.classList = "bg-lime-300 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "flying") {
    element.classList = "bg-indigo-300 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "water") {
    element.classList = "bg-blue-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "normal") {
    element.classList = "bg-neutral-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "psychic") {
    element.classList = "bg-red-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "dark") {
    element.classList = "bg-zinc-800 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "dragon") {
    element.classList = "bg-blue-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "electric") {
    element.classList = "bg-yellow-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fairy") {
    element.classList = "bg-pink-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fighting") {
    element.classList = "bg-rose-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ghost") {
    element.classList = "bg-indigo-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ground") {
    element.classList = "bg-amber-700 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ice") {
    element.classList = "bg-teal-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "rock") {
    element.classList = "bg-amber-900 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "steel") {
    element.classList = "bg-sky-700 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  }
};

fetchPokemon();
