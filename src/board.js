import {pokemonsDb} from "./db.js"
import {Pokemon} from "./pokemons.js"


class Board {

  static async fillDb(i){

    for(let id = 1; id <= i; id++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then( (response) => {
        return response.json()
      })
      .then( (response) => {
        let dados = response

        let pokemon = new Pokemon(dados.name, id, dados.types, dados.moves)

        pokemonsDb.push(pokemon)
        // Board.createPokeLi(pokemon)
      })
    }

    return pokemonsDb

  }

  // static async listarClientes(){

  //   const response = await Board.fillDb
  //   const data     = await response.json()

  //   return data

  // }

  
  static createPokeLi(pokemon){
    const aside     = document.querySelector("aside")
    const pokeList  = document.getElementById("pokeList")

    let pokemonLi   = document.createElement("li")
    let pokemonDiv  = document.createElement("div")

    pokemonDiv.innerHTML = `

      <img src="${pokemon.image}" >
      
      <div class="dados" > 
        <p>${pokemon.name}</p>
        <p>ID:${pokemon.id}</p>
      </div>
    
    `

    pokemonDiv.classList.add("pokeContainer")

    pokemonDiv.style.backgroundColor = pokemon.color

    pokemonLi.appendChild(pokemonDiv)

    pokemonLi.id = pokemon.id
    pokeList.appendChild(pokemonLi)
    aside.appendChild(pokeList)
  }

  static getClick(event){

    let target = event.target
  
    for(let i = 0; i < 10; i++){

      if(target.className === "pokeContainer"){
        target = target.parentNode
        return target.id
      }

      else{

        target = target.parentNode
      }

    }

  }

  static returnRightPokemon(id){

    for(let i = 0; i < pokemonsDb.length; i++){

      if(pokemonsDb[i].id == id){
        Board.createPokeCards(pokemonsDb[i - 1], pokemonsDb[i], pokemonsDb[i + 1])
        console.log(pokemonsDb[i].type)
      }

    }

  }

  static createPokeCards(pokeLeft, pokeMain, pokeRight){

    let mainCardContainer       = document.getElementById("mainCardContainer")

    mainCardContainer.innerHTML = ""

    pokeLeft  !== undefined ? Board.createLeftPokeCard(pokeLeft) : Board.createInvisiblePokeCard(pokeMain)
    Board.createMainPokecard(pokeMain)
    pokeRight !== undefined ? Board.createLeftPokeCard(pokeRight) : Board.createInvisiblePokeCard(pokeMain)

  }

  static createLeftPokeCard(pokemon){
    let leftCard            = document.createElement("div")
    let mainCardContainer   = document.getElementById("mainCardContainer")

    let image   = document.createElement("img")
      image.src = `${pokemon.image}`

    let div     = document.createElement("div")
      let h4    = document.createElement("h4")
      let h2    = document.createElement("h2")

      h4.innerText = `#${pokemon.id}`
      h2.innerText = `${pokemon.name}`
  
      leftCard.appendChild(image)
    div.appendChild(h4)
    div.appendChild(h2)

    div.appendChild(Board.createType(pokemon))

    leftCard.appendChild(div)

    div.classList.add("dataContent")
    leftCard.classList.add("card")
    mainCardContainer.appendChild(leftCard)
  }

  static createMainPokecard(pokemon){
    let mainCard            = document.createElement("div")
    let mainCardContainer   = document.getElementById("mainCardContainer")

    let image   = document.createElement("img")
      image.src = `${pokemon.image}`

    let div     = document.createElement("div")
      let h4    = document.createElement("h4")
      let h2    = document.createElement("h2")

      h4.innerText = `#${pokemon.id}`
      h2.innerText = `${pokemon.name}`
  
      mainCard.appendChild(image)
    div.appendChild(h4)
    div.appendChild(h2)

    div.appendChild(Board.createType(pokemon))

    mainCard.appendChild(div)

    div.classList.add("dataContent")
    mainCard.classList.add("main")
    mainCard.classList.add("card")
    mainCardContainer.appendChild(mainCard)
  }

  static createRightPokeCard(pokemon){
    let rightCard            = document.createElement("div")
    let mainCardContainer   = document.getElementById("mainCardContainer")

    let image   = document.createElement("img")
      image.src = `${pokemon.image}`

    let div     = document.createElement("div")
      let h4    = document.createElement("h4")
      let h2    = document.createElement("h2")

      h4.innerText = `#${pokemon.id}`
      h2.innerText = `${pokemon.name}`
  
      rightCard.appendChild(image)
    div.appendChild(h4)
    div.appendChild(h2)

    div.appendChild(Board.createType(pokemon))

    rightCard.appendChild(div)

    div.classList.add("dataContent")
    rightCard.classList.add("card")
    mainCardContainer.appendChild(rightCard)
  }

  static createInvisiblePokeCard(pokemon){
    let mainCard            = document.createElement("div")
    let mainCardContainer   = document.getElementById("mainCardContainer")

    mainCard.innerHTML = `
      <img src="${pokemon.image}" >

      <div class="dataContent" >

        <h4>
          #${Pokemon.idToImage(pokemon.id)}
        </h4>

        <h2>
          ${pokemon.name}
        </h2>

        <h4 class="electric pokeType" >
          electric
        </h4>

      </div>
    `

    mainCard.classList.add("main")
    mainCard.classList.add("card")
    mainCard.classList.add("invisible")
    mainCardContainer.appendChild(mainCard)
  }

  static createType(pokemon){

    let ul = document.createElement("ul")

    pokemon.type.forEach( (each) => {

      let li = document.createElement("li")
      li.innerText = each.type.name
      li.classList.add(each.type.name)
      li.classList.add("pokeType")
      
      ul.appendChild(li)

    })

    return ul

  }

}

export {Board}