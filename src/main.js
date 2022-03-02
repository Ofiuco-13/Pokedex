const api = "https://pokeapi.co/api/v2/pokemon?limit=12";
const fetchPokemon = (url) => {
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

const fetchPokemonData = (pokemon) => {
  fetch(pokemon.url)
    .then((res) => res.json())
    .then((resJSON) => {
      renderData(resJSON);
    });
};

const removeOldPokemons = () => {
  const pokeCards = document.querySelectorAll("#container div");
  for (let i = 0; i < pokeCards.length; i++) {
    pokeCards[i].remove();
  }
};

const obtainId = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((resJSON) => {
      showContent(resJSON);
    });
};

const showContent = (res) => {
  const sidebar = document.querySelector("#sidebar");
  if (sidebar.innerHTML === "\n        ") {
    createElements(res);
    showSideBar(sidebar);
  }
};

const showSideBar = (element) => {
  element.classList.toggle("-translate-x-full");
  testShowSidebar(element);
};

const hideSideBar = () => {
  sidebar.classList.toggle("-translate-x-full");
  removePokeData(sidebar);
};

const removePokeData = (element) => {
  element.innerHTML = "\n        ";
  testRemovePokeData(element);
};
