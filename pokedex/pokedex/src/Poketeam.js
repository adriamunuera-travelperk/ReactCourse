import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './css/Poketeam.css'

class Poketeam extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let pokemons = this.props.pokemons
    return (
      <div className="Poketeam">
        <MatchResult didWin={this.props.didWin} exp={this.props.totalExp}/>
        {pokemons.map(pokemon => <Pokecard pokemon={pokemon}/> )}
      </div>
    )
  }
}

class MatchResult extends Component {
  render() {
    const didWin = this.props.didWin
    const exp = this.props.exp

    if (didWin) {
      return (<div className="MatchResultWin">
          <h1> Winning hand </h1>
          <p> Total experience: {exp}</p>
        </div>)
    } else {
      return (<div className="MatchResultLose">
          <h1> Losing hand </h1>
          <p> Total experience: {exp}</p>
        </div>
      )
    }
  }
}

export default Poketeam
