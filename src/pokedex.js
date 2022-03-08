import { pokeApi, fetchPokemon, removeOldPokemons } from "./pokeapi.js";

document.addEventListener("DOMContentLoaded", () => fetchPokemon(pokeApi));

document.addEventListener("click", (e) => {
  if (e.target.matches("#buttons a")) {
    e.preventDefault();
    removeOldPokemons();
    fetchPokemon(e.target.getAttribute("href"));
  }
});
