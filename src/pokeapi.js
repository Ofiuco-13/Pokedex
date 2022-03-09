import { renderData } from "./ui/grid.js";
import { createButtons } from "./ui/buttons.js";
import tests from "./tests/tests.js";

const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=12";
const fetchPokemon = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      resJSON.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
      createButtons(resJSON);
      tests.testFetchPokemon(resJSON);
    });
};

const fetchPokemonData = (pokemon) => {
  fetch(pokemon.url)
    .then((res) => res.json())
    .then((resJSON) => {
      renderData(resJSON);
    });
};

const object = {
  pokeApi,
  fetchPokemon,
  fetchPokemonData,
};

export default object;
