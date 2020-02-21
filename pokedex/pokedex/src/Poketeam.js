import React, {Component} from 'react'
import Pokecard from './Pokecard'


class Poketeam extends Component {
  render() {

  }
}

class MatchResult extends Component {
  render() {
    const didWin = this.props.didWin
    const exp = this.props.exp
    if (didWin) {
      return (
        <div className="MatchResultWin">
          <h1> Winning hand </h1> <br>
          <p> Total experience: {exp}</p>
        </div>)
    } else {
      return (
        <div className="MatchResultLose">
          <h1> Losing hand </h1> <br>
          <p> Total experience: {exp}</p>
        </div>
      )
    }
  }
}

export default Poketeam
