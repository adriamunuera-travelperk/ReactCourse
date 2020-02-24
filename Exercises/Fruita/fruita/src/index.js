import React from 'react'
import ReactDOM from 'react-dom'
import {choice, remove} from './helpers'
import food from './food'

class App extends React.Component {
  render() {
    let ration = choice(food)
    const restOfFood = remove(ration, food)
    return (<div>
      <p> Hi, I want one {ration} </p>
      <p> Here you go! </p>
      <p> I want another, please </p>
      <p> I'm sorry, I do not have more {ration}! </p>
      <p> I only have {restOfFood.length} ratons of food left! </p>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
