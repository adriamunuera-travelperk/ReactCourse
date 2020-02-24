import React, {Component} from 'react'
import {getPokemonURLImage, randomString} from './Helpers'
import './css/Pokecard.css'

class Pokecard extends Component {
  render() {
    const pokemon = this.props.pokemon
    const name = pokemon.name
    const id = pokemon.id
    const type = pokemon.type
    const experience = pokemon.base_experience

    return (<div className="Pokecard Zoom" key={randomString}>
              <img src={getPokemonURLImage(id)}/>
              <h3> {name} </h3>
              <p> Type: {type} </p>
              <p> EXP: {experience} </p>
            </div>)
  }
}

export default Pokecard
