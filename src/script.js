import {pokemonsDb} from "./db.js"
import {Pokemon} from "./pokemons.js"
import {Board} from "./board.js"

const main      = document.querySelector("main") 
const aside     = document.querySelector("aside")
const container = document.getElementById("container")
const pokeList  = document.getElementById("pokeList")


function rodaPokemons(id) {

  let pokemonAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( (response) => {
    return response.json()
  })
  .then( (response) => {
    let dados = response
    // console.log(dados)

    let pokemon = new Pokemon(dados.name, id, dados.types[0].type.name, [dados.moves[0].move.name, dados.moves[1].move.name, dados.moves[2].move.name ,dados.moves[3].move.name] )
    
    pokemonsDb.push(pokemon)

    Board.createPokeLi(pokemon)
 
    /*let pokemonLi = document.createElement("div")

    pokemonLi.innerHTML = `
    
      <img src="https:/assets.pokemon.com/assets/cms2/img/pokedex/full/${idToImage(pokemon.id)}.png" >
      
      <div class="dados" > 
        <p>${pokemon.name}</p>
        <p>ID:${pokemon.id}</p>
      </div>
    
    `

    // let mainCard = document.createElement("div")
    // mainCard.innerHTML = `
    

    //   <div id="data">

    //     <div id="mainCard--nameAndType" >

    //       <h2>
    //       ${dados.name}
    //       </h2>

    //       <h2>${dados.types[0].type.name}</h2>

    //     </div>

    //     <h2>
    //       #${idToImage(dados.id)}
    //     </h2>

    //   </div>

    //   <img src="https:/assets.pokemon.com/assets/cms2/img/pokedex/full/${idToImage(dados.id)}.png" >

    //   <ol>
    //     <li>attack1</li>
    //     <li>attack1</li>
    //     <li>attack1</li>
    //     <li>attack1</li>
    //   </ol>
        

    // `

    pokemonLi.classList.add("pokeContainer")

    pokemonLi.style.backgroundColor = selectColor(pokemon.color)

    // container.appendChild(mainCard)
    pokeList.appendChild(pokemonLi)
    aside.appendChild(pokeList)*/

  })

}

function selectPokemon() {

}

function idToImage(id) {

  let result = id.toString()

  result.length === 1 ? result = `00${result}` : result.length === 2 ?  result = `0${result}` : result = result

  return result.toString()
}

function selectColor(type) {
  switch (type) {
    case "grass":
      return "#78C850"
    case "fire":
      return "#F08030"
    case "water":
      return "#6890F0"
    case "bug":
      return "#A8B820"
    case "normal":
      return "#A8A878"
    case "poison":
      return "#A040A0"
    case "electric":
      return "#F8D030"
    case "ground":
      return "#E0C068"
    case "fairy":
      return "#EE99AC"
    case "fighting":
      return "#C03028"
    case "psychic":
      return "#F85888"
    case "rock":
      return "#B8A038"
    case "ghost":
      return "#705898"
    case "ice":
      return "#98D8D8"
    case "dragon":
      return "#7038F8"
    case "dark":
      return "#705B4A"
  }
}

for(let i = 1; i < 201; i++){
  rodaPokemons(i)
}

// rodaPokemons(25)

export {selectColor, idToImage}