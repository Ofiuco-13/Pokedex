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
  absolute
  text-sky-200 
  text-2xl 
  font-bold
  `;

  const gifSprite =
    pokeData.sprites.versions["generation-v"]["black-white"].animated;

  const sprite = document.createElement("div");
  sprite.classList = `
  flex flex-col 
  justify-center 
  items-center
  `;

  const name = document.createElement("h2");
  name.innerHTML = `${pokeData.name}`.toUpperCase();
  name.classList = `
  font-bold 
  text-xl 
  text-sky-900 
  mt-5
  `;

  const type = document.createElement("div");
  type.classList = "mt-5";

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
    const typeP = document.createElement("span");
    typeP.classList = "text-red-700";
    typeP.innerHTML = type["type"]["name"];
    div.appendChild(typeP);
  });
};

const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  pokeImage.classList = "mt-5";
  div.appendChild(pokeImage);
};

fetchPokemon();
