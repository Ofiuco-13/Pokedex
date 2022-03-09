import grid from "./ui/grid.js";
import object from "./pokeapi.js";

document.addEventListener("DOMContentLoaded", () => object.fetchPokemon(object.pokeApi));

document.addEventListener("click", (e) => {
  if (e.target.matches("#buttons a")) {
    e.preventDefault();
    grid.removeOldPokemons();
    object.fetchPokemon(e.target.getAttribute("href"));
  }
});
