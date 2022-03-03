# Pokedex with PokeAPI
 In this pokedex you can see 1000+ pokemons with their respective stats and abilities. All was made with vanilla [Javascript](https://www.javascript.com/), [TailwindCSS](https://tailwindcss.com/), also contains unit tests and tests e2e with [Cypress](https://www.cypress.io/).
 
 ---
 # PokeAPI
 [PokeAPI](https://pokeapi.co/) is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.
 
 1. If you want to use this project use the script below,  this command will also update all the packages listed to the latest version and also install missing packages.
 ```
 npm update
 ```
     
2. To style the pokedex you need to start TailwindCSS CLI with:
```
npx tailwindcss -i ./src/main.css -o ./public/output.css --watch
```

or 
```
npm start
```
3. To start testing with Cypress just type: 
```
npm run cy:dev
```
---
# Unit Tests
To check the unit tests go to ./src/tests.js

Uni tests ensures that the code behaves as expected.

Assertions replace us humans in checking that the software does what it should. They express requirements that the unit under test is expected to meet.
