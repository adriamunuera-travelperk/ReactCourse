import React, {Component} from 'react'
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
import {Nav, Jumbotron, Button} from 'react-bootstrap'
import {v4 as uuid} from 'uuid'

import Dogo from './Dogo.js'
import Homepage from './Homepage.js'

import './App.css'


class Home extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: '/imgs/whiskey.jpg',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: '/imgs/hazel.jpg',
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: '/imgs/tubby.jpg',
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  getDogOfName = (name) => {
    const dog = this.props.dogs.filter(dog => dog.name.toLowerCase() == name.toLowerCase())
    console.log(name, dog)
    return dog[0]
  }

  render() {
    return (<div>
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link>
                    <NavLink exact activeClassName={'activePage'} to="/dogs/">HOME</NavLink>
                  </Nav.Link>
                </Nav.Item>
                {this.props.dogs.map(dog => {
                  return (<Nav.Item key={uuid()}>
                            <Nav.Link>
                              <NavLink activeClassName={'activePage'} to={'/dogs/'+dog.name}> {dog.name} </NavLink>
                            </Nav.Link>
                        </Nav.Item>)
                })}
              </Nav>
              <Redirect to='/dogs/'/>
              <Route exact path='/dogs/' render={() => <Homepage dogs={this.props.dogs}/>}/>
              <Route exact path='/dogs/:name' render={(props) => <Dogo dog={this.getDogOfName(props.match.params.name)}/>}/>
            </div>)
  }
}

export default Home
