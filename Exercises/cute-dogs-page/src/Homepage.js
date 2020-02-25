import React, {Component} from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import {Nav, Jumbotron, Button} from 'react-bootstrap'
import CuteRoundPhoto from './CuteRoundPhoto.js'
import {v4 as uuid} from 'uuid'

const Homepage = (props) => {
  console.log('HOMEPAGE', props)
  return (<div>
            <Jumbotron>
            <h1>Look at these cute dogs</h1>
            {props.dogs.map(dog => <CuteRoundPhoto props={dog} key={uuid()}/>)}
            </Jumbotron>
          </div>)}

export default Homepage
