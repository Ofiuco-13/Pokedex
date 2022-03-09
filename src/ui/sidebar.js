import {
  createPokeImage,
  createTypes,
  createAbilities,
  createBodyData,
  createStats,
} from "./pokemon.js";

import tests from "../tests/tests.js";

const createSideBarElements = (pokeData) => {
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
  exitButton.addEventListener("click", () => {
    hideSideBar();
  });
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
    createSideBarElements(res);
    showSideBar(sidebar);
  }
};

const showSideBar = (element) => {
  element.classList.toggle("-translate-x-full");
  tests.testShowSidebar(element);
};

const hideSideBar = () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("-translate-x-full");
  removePokeData(sidebar);
};

const removePokeData = (element) => {
  element.innerHTML = "\n        ";
  tests.testRemovePokeData(element);
};

const sidebar = {
  createSideBarElements,
  obtainId,
  showContent,
  showSideBar,
  removePokeData,
}

export default sidebar;
