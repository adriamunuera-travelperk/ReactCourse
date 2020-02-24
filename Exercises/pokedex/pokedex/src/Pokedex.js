import React, {Component} from 'react'
import Poketeam from './Poketeam'
import {getRandomTeam, getPokemonURLImage, getTotalExperienceOfTeam} from './Helpers'

class Pokedex extends Component {
  state = {team1:[], team2:[]}

  constructor(props) {
    super(props)
    let team1 = getRandomTeam()
    let team2 = getRandomTeam()
    this.state = {team1, team2}
  }

  render() {
    const totalExp1 = getTotalExperienceOfTeam(this.state.team1)
    const totalExp2 = getTotalExperienceOfTeam(this.state.team2)
    const didTeam1Win = totalExp1 > totalExp2
    return (
      <div>
        <Poketeam pokemons={this.state.team1} didWin={didTeam1Win} totalExp={totalExp1}/>
        <Poketeam pokemons={this.state.team2} didWin={!didTeam1Win} totalExp={totalExp2}/>
      </div>
    )
  }
}

export default Pokedex
