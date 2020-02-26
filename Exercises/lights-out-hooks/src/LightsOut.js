import React, {useState} from 'react'
import LightCell from './LightCell'


const useLightsOutState = (initialMatrix) => {
  const [matrix, setMatrix] = useState(initialMatrix)
  const [count, setCount] = useState(0)

  const toggleValue = (i, j, matrix2) => {
    if (i >= 0 && i < matrix.length ) {
      if (j >= 0 && j < matrix.length ) {
        matrix2 = [...matrix2.slice(0,i),[...matrix2[i].slice(0, j), !matrix2[i][j], ...matrix2[i].slice(j+1)], ...matrix2.slice(i+1)]
      }
    }
    return matrix2
  }
  const toggleCell = (i, j) => {
    let copyOfMatrix = [...matrix]
    if (matrix[i][j]) {
      copyOfMatrix = toggleValue(i, j, copyOfMatrix)
      copyOfMatrix = toggleValue(i+1, j, copyOfMatrix)
      copyOfMatrix = toggleValue(i-1, j, copyOfMatrix)
      copyOfMatrix = toggleValue(i, j+1, copyOfMatrix)
      copyOfMatrix = toggleValue(i, j-1, copyOfMatrix)
    }
    setMatrix(copyOfMatrix)
  }

  return {
    matrix,
    toggleCell,
    count,
    incrementCount: () => setCount(count+1)
  }
}

/*
Generate a map of nxn light cells.
The parameter p € [0,1) defines how easy is the map.
The closer it is to 1, the easier it is.
THe close it is to 0, the more difficult it becomes.
*/
const generateLightsOutMap = (n, p) => {
  let a = new Array(n)
  for (let i=0; i < n; i++) {
      let row = new Array(n)
      for (let j=0; j < n; j++) {
          const random = Math.random()
          if (random > p) row[j] = false
          else row[j] = true
      }
      a[i] = row
  }
  console.log(a)
  return a
}

const didWin = (matrix, n) => {
  for (let  i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]) return false
    }
  }
  return true
}
const LightsOut = (props) => {
  const n = props.n
  const p = props.p
  const lightsOutHook = useLightsOutState(generateLightsOutMap(n, p))
  const cellCallback = (i, j) => {
    lightsOutHook.toggleCell(i, j)
    lightsOutHook.incrementCount()
  }
  const isWinned = didWin(lightsOutHook.matrix, n)
  return (<div>
            <h1>LIGHTS OUT GAME</h1>
            {lightsOutHook.matrix.map((row, i) => {
              return (<div className={'rowDiv'}>
                        {row.map((cell, j) => {
                          return <LightCell callback={cellCallback} i={i} j={j} on={cell}/>
                        })}
                    </div>)
            })}
            {isWinned? <h1>You've won!</h1>:<p>Keep playing!</p>}
          </div>)
}

export default LightsOut
