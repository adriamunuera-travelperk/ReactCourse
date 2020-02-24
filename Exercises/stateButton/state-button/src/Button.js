import React, {Component} from 'react'

class Button extends Component {
  state = {number: 1}

  reroll = () => {
    console.log('REROLLING')
    this.setState({number: (Math.floor(Math.random()*10))})
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {
     this.reroll()
  }

  render() {
    if (this.state.number == 7) {
      return (<div>
        <h1>Your number is {this.state.number}</h1>
        <h2>¡¡You win!!</h2>
      </div>)
    } else {
      return (<div>
              <h1>Your number is {this.state.number}</h1>
              <RerollButton action={this.reroll} context={this}/>
            </div>)
    }
  }
}

class RerollButton extends Component {
  render() {
    const context = this.props.context
    const action = this.props.action
    return(<button onClick={context.reroll} type="button">Random number</button>)
  }
}

export default Button;
