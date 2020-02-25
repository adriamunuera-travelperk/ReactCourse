import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

const CuteRoundPhoto = (props) => {

  console.log('CUTE ROUND PHOTO', props.props.name)
  return (<NavLink to={'/dogs/'+props.props.name}>
            <img src={props.props.src} className={'circularImg'}/>
          </NavLink>)
}

export default CuteRoundPhoto
