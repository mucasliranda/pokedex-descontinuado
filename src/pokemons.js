import {selectColor} from "./script.js"

class Pokemon {
  constructor(name, id, type, moves){
    this._name  = name
    this._id    = id
    this._type  = type
    this._color = selectColor(this._type)
    this._moves = moves 
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


}

export {Pokemon}