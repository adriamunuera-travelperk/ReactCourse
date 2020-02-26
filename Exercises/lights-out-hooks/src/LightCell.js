import React from 'react'
import './App.css'


const LightCell = (props) =>{
  const onStyle = {backgroundColor: 'blue'}
  const offStyle = {backgroundColor: 'black'}
  const cellStyle = props.on? onStyle:offStyle
  return (<div
            onClick={() => props.callback(props.i, props.j)}
            style={cellStyle} className={'cell'}>
          </div>)
}

export default LightCell
