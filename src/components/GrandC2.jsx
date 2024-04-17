import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../actions/count.js'

function GrandC2() {
  // Subscribe
  const count = useSelector(store => store.countReducer.count)
  const dipatch = useDispatch()

  return (
    <div style={{ flex: 1 }}>
      GrandC2
      <h1>{count}</h1>
      <button onClick={() => dipatch(increment())}>Increment</button>
    </div>
  )
}

export default GrandC2