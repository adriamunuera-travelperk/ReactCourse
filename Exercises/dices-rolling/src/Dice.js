import React, {Component} from 'react'

const numberToString = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six'
}

class Dice extends Component {
  render() {
    const numberIntoString = numberToString[this.props.number+1]
    const finalClassesCSS = 'fas'+' fa-dice-' + numberIntoString
    console.log(numberIntoString)
    return <h1> {finalClassesCSS.toString()} </h1>
    return <i className={finalClassesCSS}></i>
  }
}

export default Dice
