document.addEventListener("DOMContentLoaded", () => fetchPokemon(api));

document.addEventListener("click", (e) => {
  if (e.target.matches("#buttons a")) {
    e.preventDefault();
    removeOldPokemons();
    fetchPokemon(e.target.getAttribute("href"));
  }
});
