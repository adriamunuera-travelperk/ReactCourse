import React, {Component} from 'react'
import ColorCell from './ColorCell'
import './App.js'

const colors = ['#18B26F', '#73B2D9', '#AF0000', '#E4CC37', '#E18335', '#42f5d4', '#cb42f5', '#ff6e19']


class ColorGrid extends Component {
  state = {grid:[]}

  randomColor = () => {
    const newColor = colors[Math.floor(Math.random()*colors.length)]
    return newColor
  }

  requestNewColor = (oldColor,index) =>{
    console.log(oldColor, index)
    let newColor = this.randomColor()
    while (newColor === oldColor) {
      newColor = this.randomColor()
    }
    const newGrid = this.state.grid
    newGrid[index] = newColor
    this.setState({grid: newGrid})
  }

  constructor(props) {
    super(props)
    let newGrid = new Array(this.props.numberOfCells)
    for (let i = 0; i < newGrid.length; i++) {
      newGrid[i] = this.randomColor()
    }
    this.state = {grid: newGrid}
  }
  render() {
    return(<div className='colorGrid'>
            {this.state.grid.map((color, index) =>
               <ColorCell color={color} parent={this} key={index} idx={index}/>)}
          </div>)
  }
}

export default ColorGrid
