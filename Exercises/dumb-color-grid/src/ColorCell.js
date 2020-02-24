import React, {Component} from 'react'
import './App.js'

class ColorCell extends Component {

  changeMyself = () => {
    const color = this.props.color
    const parent = this.props.parent
    const index = this.props.idx
    parent.requestNewColor(color, index)
  }


  render() {
    const color = this.props.color
    return (<div
              className='colorCell'
              style={{backgroundColor:color}}
              onClick={this.changeMyself}>
            </div>)
  }
}

export default ColorCell
