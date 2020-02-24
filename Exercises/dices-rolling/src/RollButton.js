import React, {Component} from 'react'
import Dice from './Dice'

class RollButton extends Component {
  randomDiceNumber = () => {
    const number = Math.floor(Math.random()*6)
    console.log(number)
    return number
  }
  roll = () => this.setState({d1: this.randomDiceNumber(), d2: this.randomDiceNumber()})
  state = {}

  componentDidMount() {
    this.roll()
  }

  render() {
    console.log(this.state)
    return (<div>
              <Dice number={this.state.d1}/>
              <Dice number={this.state.d2}/>
              <button type="button" onClick={this.roll}> Roll dice! </button>
            </div>)
  }
}

export default RollButton
