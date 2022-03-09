export const createButtons = (res) => {
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
