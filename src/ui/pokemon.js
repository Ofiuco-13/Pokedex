export const createTypes = (types, div) => {
  types.forEach((type) => {
    const typeSpan = document.createElement("span");
    typeSpan.innerHTML = type["type"]["name"].toUpperCase();
    createTypeColor(typeSpan, type);
    div.appendChild(typeSpan);
  });
};

export const createPokeImage = (sprites, div) => {
  const pokeImage = document.createElement("img");
  pokeImage.srcset = sprites.front_default;
  pokeImage.classList = "mt-5";
  div.appendChild(pokeImage);
};

export const createTypeColor = (element, type) => {
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

export const createAbilities = (abilities, div) => {
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

export const createBodyData = (height, weight, div) => {
  const pokeHeight = document.createElement("span");
  const pokeWeight = document.createElement("span");
  pokeHeight.innerHTML = `Height: ${height}`;
  pokeWeight.innerHTML = `Weight: ${weight}`;
  div.append(pokeHeight, pokeWeight);
};

export const createStats = (stats, div) => {
  stats.forEach((stat) => {
    const statName = document.createElement("span");
    const statBase = document.createElement("span");
    statName.innerHTML = `${stat.stat.name}:`;
    statBase.innerHTML = stat.base_stat;
    div.append(statName, statBase);
  });
};
