class Pokemon {
  constructor(name, id, type, moves, image){
    this._name  = name
    this._id    = id
    this._type  = type
    this._color = Pokemon.selectColor(this._type[0].type.name)
    this._moves = moves 
    this._image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${Pokemon.idToImage(this._id)}.png`
  }

  get name() {
    return this._name
  }

  get id() {
    return this._id
  }

  get type() {
    return this._type
  }

  get color() {
    return this._color
  }

  get moves() {
    return this._moves
  }

  get image() {
    return this._image
  }

  static selectColor(type) {

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
      case "flying":
        return "#3dc7ef"
      case "poison":
        return "#A040A0"
      case "electric":
        return "#F8D030"
      case "ground":
        return "#f7de3f"
      case "fairy":
        return "#fdb9e9"
      case "fighting":
        return "#d56723"
      case "psychic":
        return "#f366b9"
      case "rock":
        return "#B8A038"
      case "ghost":
        return "#705898"
      case "ice":
        return "#98D8D8"
      case "dragon":
        return "#53a4cf"
      case "dark":
        return "#705B4A"
    }
    
  }

  static idToImage(id) {

    let result = id.toString()
  
    result.length === 1 ? result = `00${result}` : result.length === 2 ?  result = `0${result}` : result = result
  
    return result.toString()
  }

}
export {Pokemon}