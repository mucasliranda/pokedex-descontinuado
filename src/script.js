import {pokemonsDb} from "./db.js"
import {Pokemon} from "./pokemons.js"
import {Board} from "./board.js"

Board.fillDb(6)



console.log(pokemonsDb)

const button = document.querySelector("#consoleDb")

button.addEventListener( "click", (e) => {
  pokemonsDb.forEach( (pokemon) => {
    Board.createPokeLi(pokemon)
  })
})



document.querySelector("ul").addEventListener( "click", (event) => {
  Board.returnRightPokemon(Board.getClick(event))
})