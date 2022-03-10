import {idToImage, selectColor} from "./script.js"

class Board {
  static createPokeLi(pokemon) {

    const aside     = document.querySelector("aside")
    const pokeList  = document.getElementById("pokeList")

    let pokemonLi = document.createElement("div")

    pokemonLi.innerHTML = `
    
      <img src="https:/assets.pokemon.com/assets/cms2/img/pokedex/full/${idToImage(pokemon.id)}.png" >
      
      <div class="dados" > 
        <p>${pokemon.name}</p>
        <p>ID:${pokemon.id}</p>
      </div>
    
    `

    pokemonLi.classList.add("pokeContainer")

    pokemonLi.style.backgroundColor = selectColor(pokemon.color)

    pokeList.appendChild(pokemonLi)
    aside.appendChild(pokeList)

  }


}

export {Board}