import React, {Component} from 'react'
import './App.css'
const BASE_URL = 'https://tinyurl.com/react-coin-'
const HEADS_URL = BASE_URL + 'heads-jpg'
const TAILS_URL = BASE_URL + 'tails-jpg'
const HEADS_VALUE = 0

class Coin extends Component {
  render() {
    if (this.props.newValue == -1) {
      return <p>Please flip the coin with the button</p>
    }
    const isHeads = this.props.newValue == HEADS_VALUE
    if (isHeads) {
      return <img src={HEADS_URL} alt='heads' className="Coin"/>
    } else {
      return <img src={TAILS_URL} alt='tails' className="Coin"/>
    }
  }
}

export default Coin
