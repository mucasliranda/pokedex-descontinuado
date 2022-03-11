import {idToImage, selectColor} from "./script.js"
import {pokemonsDb} from "./db.js"


class Board {
  
  static createPokeLi(pokemon) {

    /*pokemonsDb.forEach( (pokemon) => {*/
      
      const aside     = document.querySelector("aside")
      const pokeList  = document.getElementById("pokeList")
  
      let pokemonLi = document.createElement("div")

      // console.log(pokemon)
  
      pokemonLi.innerHTML = `

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" >
        
        <div class="dados" > 
          <p>${pokemon.name}</p>
          <p>ID:${pokemon.id}</p>
        </div>
      
      `
      // console.log(pokemon.color)
  
      pokemonLi.classList.add("pokeContainer")
  
      pokemonLi.style.backgroundColor = pokemon.color
  
      pokeList.appendChild(pokemonLi)
      aside.appendChild(pokeList)
      // })

  }

}

//  <img src="https:/assets.pokemon.com/assets/cms2/img/pokedex/full/${idToImage(pokemon.id)}.png" >

export {Board}