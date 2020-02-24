import React, {Component} from 'react'
import Coin from './Coin.js'
import './App.css'

class Flipper extends Component {
  static HEADS_INDEX = 0
  static TAILS_INDEX = 1

  state = {counter: 0, currentCoinValue: -1, results: [0,0]}

  random = () => Math.floor(Math.random()*2)
  addOne = (x) => x + 1
  updateAtIndex = (i) => {
    const a = [...this.state.results]
    a[i] = a[i] + 1
    return a
  }

  flipCoin = () => {
    console.log('BEFORE: ', this.state)
    this.setState({currentCoinValue: this.random()})
    const newValue = this.state.currentCoinValue
    this.setState({results: this.updateAtIndex(newValue)})
    this.setState({counter: this.addOne(this.state.counter)})
    console.log('AFTER: ', this.state)
  }

  render() {
    return(<div className='Flipper'>
            <h1>Let's flip a  coin!</h1>
            <Coin newValue={this.state.currentCoinValue}/>
            <button className='Button' onClick={this.flipCoin}>FLIP ME</button>
            <p> Out of {this.state.counter}, there have been {this.state.results[0]} and {this.state.results[1]} tails.</p>
          </div>)
  }
}

export default Flipper

/*
  PROBLEMA: el estat ha de ser mínim + ha de saber de forma facil quina era la ultima elecció + ha de manteinr els stats
*/
