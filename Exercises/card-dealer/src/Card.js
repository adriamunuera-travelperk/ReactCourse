import React, {Component} from 'react'
import './App.css'

const Card = (props) =>{
  const MAX_DEGREES = 25
  const MIN_DEGREES = -MAX_DEGREES
  const randomNumber = Math.random()*MAX_DEGREES*2
  const interpolation = -MIN_DEGREES + randomNumber*(MAX_DEGREES*2)
  const rotateStyle = {transform: 'translate(-50%, -50%) rotateZ('+interpolation.toString()+'deg)'}
  return  <img src={props.src} alt={props.alt} className='Card' style={rotateStyle}/>
}

export default Card
