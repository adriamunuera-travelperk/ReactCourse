import React, {Component} from 'react'
import './App.js'

class ColorCell extends Component {

  changeMyself = () => {
    const color = this.props.color
    const index = this.props.idx
    this.props.action(color, index)
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
