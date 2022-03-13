import {pokemonsDb} from "./db.js"
import {Pokemon} from "./pokemons.js"
import {Board} from "./board.js"

function rodaPokemons(id) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( (response) => {
    return response.json()
  })
  .then( (response) => {
    let dados = response

    let pokemon = new Pokemon(dados.name, id, dados.types, dados.moves)

    pokemonsDb.push(pokemon)
    Board.createPokeLi(pokemon)
  })

}

for(let i = 1; i <= 50; i++){

  rodaPokemons(i)

}

document.querySelector("ul").addEventListener( "click", (event) => {
  Board.returnRightPokemon(Board.getClick(event))
})