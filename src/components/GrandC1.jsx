import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../actions/count.js'

function GrandC1() {
  const dipatch = useDispatch()

  return (
    <div style={{ flex: 1 }}>
      GrandC1<br />
      <button onClick={() => dipatch(decrement())}>Decrement</button>
    </div>
  )
}

export default GrandC1