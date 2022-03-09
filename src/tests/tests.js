const testFetchPokemon = (res) => {
  console.assert(
    res.results.length === 12,
    "Error: The amount of pokemons was not 12!"
  );
};

const testShowSidebar = (element) => {
  console.assert(
    element.innerHTML !== "\n        ",
    "Error: The sidebar showed with no content!"
  );
};

const testRemovePokeData = (element) => {
  console.assert(
    element.innerHTML === "\n        ",
    "Error: Sidebar cannot be displayed!"
  );
};

const testRenderData = (res) => {
  console.assert(res.id > 0, "Error: renderData worked when id was below 1");
};

const tests = {
  testFetchPokemon,
  testShowSidebar,
  testRemovePokeData,
  testRenderData,
};

export default tests;
