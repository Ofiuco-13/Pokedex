const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((res) => {
      return res.json();
    })
    .then((resJSON) => {
      resJSON.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
};