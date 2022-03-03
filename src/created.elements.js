const createButtons = (res) => {
  const previousButton = document.querySelector("#previous-button");
  const nextButton = document.querySelector("#next-button");
  nextButton.id = "next-button";
  previousButton.href = res.previous;
  nextButton.href = res.next;
  nextButton.classList = `
  bg-gray-300 
  hover:bg-gray-400
  transition-all duration-300 
  text-gray-800 
  font-bold 
  py-2 
  px-4 
  rounded-r
  `;

  if (previousButton.href === "http://127.0.0.1:5500/Pokedex/null") {
    previousButton.classList = "hidden";
  } else {
    previousButton.classList = `
    bg-gray-300 
    hover:bg-gray-400 
    transition-all duration-300
    text-gray-800 
    font-bold 
    py-2 
    px-4 
    rounded-l
    `;
    previousButton.id = "previous-button";
  }
};

const renderData = (pokeData) => {
  const container = document.querySelector("#container");

  const pokemonContainer = document.createElement("div");
  pokemonContainer.setAttribute("onclick", "obtainId(this.id)");
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
  testRenderData(pokeData);
};

const sortCardsById = (container) => {
  const divs = [...container.children];
  divs.sort((a, b) => a.id - b.id);
  divs.forEach((div) => container.appendChild(div));
};

const createTypes = (types, div) => {
  types.forEach((type) => {
    const typeSpan = document.createElement("span");
    typeSpan.innerHTML = type["type"]["name"].toUpperCase();
    createTypeColor(typeSpan, type);
    div.appendChild(typeSpan);
  });
};

const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  pokeImage.classList = "mt-5";
  div.appendChild(pokeImage);
};

const createTypeColor = (element, type) => {
  if (type["type"]["name"] === "grass") {
    element.classList =
      "bg-green-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "poison") {
    element.classList =
      "bg-violet-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fire") {
    element.classList =
      "bg-orange-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "bug") {
    element.classList =
      "bg-lime-300 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "flying") {
    element.classList =
      "bg-indigo-300 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "water") {
    element.classList =
      "bg-blue-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "normal") {
    element.classList =
      "bg-neutral-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "psychic") {
    element.classList =
      "bg-red-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "dark") {
    element.classList =
      "bg-zinc-800 text-white text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "dragon") {
    element.classList =
      "bg-blue-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "electric") {
    element.classList =
      "bg-yellow-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fairy") {
    element.classList =
      "bg-pink-500 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "fighting") {
    element.classList =
      "bg-rose-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ghost") {
    element.classList =
      "bg-indigo-600 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ground") {
    element.classList =
      "bg-amber-700 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "ice") {
    element.classList =
      "bg-teal-400 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "rock") {
    element.classList =
      "bg-amber-900 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  } else if (type["type"]["name"] === "steel") {
    element.classList =
      "bg-sky-700 text-gray-800 text-bold rounded py-1 px-1.5 mr-1";
  }
};

const createElements = (pokeData) => {
  const gifSprite = pokeData.sprites.versions["generation-v"]["black-white"];
  const sprite = document.createElement("div");
  sprite.classList = `
  flex flex-col 
  justify-center 
  items-center
  `;

  const exitButton = document.createElement("button");
  exitButton.id = "exit-button";
  exitButton.innerHTML = "Done";
  exitButton.setAttribute("onclick", "hideSideBar()");
  exitButton.classList = `
  absolute
  top-2
  right-0.5
  text-red-600
  text-2xl
  font-bold 
  bg-red-200
  hover:bg-rose-300
  text-rose-600
  transition-all duration-300 
  rounded
  text-sm 
  px-4
  py-2.5 
  text-center 
  mr-2 mb-2 
  `;

  const type = document.createElement("div");
  type.classList = `
  mt-5
  font-bold
  text-center
  `;

  const ability = document.createElement("div");
  ability.classList = `
  mt-2
  `;

  const abilityH2 = document.createElement("h2");
  abilityH2.innerHTML = "ABILITIES";
  abilityH2.classList = "text-lg font-bold text-gray-900 mt-4";

  const bodyData = document.createElement("div");
  bodyData.classList = `
  mt-4
  text-base 
  font-bold 
  text-gray-900 
  p-1
  bg-gray-100
  border border-gray-200
  space-x-2
  `;

  const stats = document.createElement("div");
  stats.classList = `
  mt-5
  space-x-2
  text-base
  font-semibold
  text-bold
  `;

  const baseExp = document.createElement("p");
  baseExp.innerHTML = `Base Experiencie: ${pokeData.base_experience}`;
  baseExp.classList = `
  text-indigo-500
  text-base
  font-semibold
  text-bold
  mt-8
  `;

  const shinyImg = document.createElement("img");
  const shiny = document.createElement("div");
  shinyImg.srcset = gifSprite.front_shiny;
  shiny.innerHTML = "Shiny :";
  shiny.classList = `
  flex flex-col 
  justify-center 
  items-center
  text-gray-900
  text-base
  font-bold
  mt-5
  `;

  shiny.appendChild(shinyImg);

  createPokeImage(gifSprite, sprite);
  createTypes(pokeData.types, type);
  createAbilities(pokeData.abilities, ability);
  createBodyData(pokeData.height, pokeData.weight, bodyData);
  createStats(pokeData.stats, stats);

  const sidebar = document.querySelector("#sidebar");
  sidebar.append(
    sprite,
    exitButton,
    type,
    abilityH2,
    ability,
    bodyData,
    stats,
    baseExp,
    shiny
  );
};

const createAbilities = (abilities, div) => {
  abilities.forEach((index) => {
    const abilitySpan = document.createElement("span");
    abilitySpan.classList = `
    text-base 
    font-bold 
    text-gray-900 
    rounded-xl
    p-1
    bg-gray-100
    border border-gray-200 
    mr-2`;
    abilitySpan.innerHTML = index.ability.name;
    div.append(abilitySpan);
  });
};

const createBodyData = (height, weight, div) => {
  const pokeHeight = document.createElement("span");
  const pokeWeight = document.createElement("span");
  pokeHeight.innerHTML = `Height: ${height}`;
  pokeWeight.innerHTML = `Weight: ${weight}`;
  div.append(pokeHeight, pokeWeight);
};

const createStats = (stats, div) => {
  stats.forEach((stat) => {
    const statName = document.createElement("span");
    const statBase = document.createElement("span");
    statName.innerHTML = `${stat.stat.name}:`;
    statBase.innerHTML = stat.base_stat;
    div.append(statName, statBase);
  });
};
