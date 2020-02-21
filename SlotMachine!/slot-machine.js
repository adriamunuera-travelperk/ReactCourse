
const getRandomElement = (choices) => choices[Math.floor(Math.random() * choices.length)]

class SlotMachine extends React.Component {
  choices = ['🥐','🥬','🍒']
  //choices = [1,2,3]
  state = {symbols:[]}

  constructor(props) {
      super(props)

  }

  componentDidMount() {
    this.reroll()
  }

  reroll = () => this.setState({symbols:[getRandomElement(this.choices), getRandomElement(this.choices), getRandomElement(this.choices)]})


  render() {
    let message = ''
    if (this.state.symbols.every(v => v == this.state.symbols[0])) {
       message ='Congratulations, you win!'
    } else {
      message = 'Sorry, pay again!'
    }
    return (<div>
            <CurrentSymbols symbols={this.state.symbols}/>
            <p> {message} </p> <br/>
            <Trigger parent={this}/>
          </div>)
  }
}

class CurrentSymbols extends React.Component {
  render() {
    let addedSymbols = this.props.symbols.toString().replace(/,/g, " ")
    return <p>{addedSymbols}</p>
  }
}

class Trigger extends React.Component {
  render() {
    const parent = this.props.parent
    return (<button type="button" onClick={parent.reroll}>
              Try again (1 $)
          </button>)
  }
}
