import { createButtons, renderData, createElements } from "./created.elements.js";
import { testFetchPokemon, testShowSidebar, testRemovePokeData } from "./tests.js";

export const api = "https://pokeapi.co/api/v2/pokemon?limit=12";
export const fetchPokemon = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      resJSON.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
      createButtons(resJSON);
      testFetchPokemon(resJSON);
    });
};

export const fetchPokemonData = (pokemon) => {
  fetch(pokemon.url)
    .then((res) => res.json())
    .then((resJSON) => {
      renderData(resJSON);
    });
};

export const removeOldPokemons = () => {
  const pokeCards = document.querySelectorAll("#container div");
  for (let i = 0; i < pokeCards.length; i++) {
    pokeCards[i].remove();
  }
};

export const obtainId = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((resJSON) => {
      showContent(resJSON);
    });
};

export const showContent = (res) => {
  const sidebar = document.querySelector("#sidebar");
  if (sidebar.innerHTML === "\n        ") {
    createElements(res);
    showSideBar(sidebar);
  }
};

export const showSideBar = (element) => {
  element.classList.toggle("-translate-x-full");
  testShowSidebar(element);
};

export const hideSideBar = () => {
  sidebar.classList.toggle("-translate-x-full");
  removePokeData(sidebar);
};

export const removePokeData = (element) => {
  element.innerHTML = "\n        ";
  testRemovePokeData(element);
};
