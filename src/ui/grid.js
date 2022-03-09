import { createTypes, createPokeImage } from "./pokemon.js";
import tests from "../tests/tests.js";
import sidebar from "./sidebar.js";

export const renderData = (pokeData) => {
  const container = document.querySelector("#container");

  const pokemonContainer = document.createElement("div");
  pokemonContainer.addEventListener("click", () => {
    sidebar.obtainId(pokeData.id);
  });
  pokemonContainer.id = `${pokeData.id}`;
  pokemonContainer.classList = `
  card
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

  const gifSprite = pokeData.sprites.versions["generation-v"]["black-white"];

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
  tests.testRenderData(pokeData);
};

export const sortCardsById = (container) => {
  const divs = [...container.children];
  divs.sort((a, b) => a.id - b.id);
  divs.forEach((div) => container.appendChild(div));
};

const removeOldPokemons = () => {
  const pokeCards = document.querySelectorAll("#container div");
  for (let i = 0; i < pokeCards.length; i++) {
    pokeCards[i].remove();
  }
};

const grid = {
  removeOldPokemons,
};

export default grid;
