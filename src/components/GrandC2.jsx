import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function GrandC2() {
  // Subscribe
  const count = useSelector(store => store.count)
  const dipatch = useDispatch()

  // Action Creator
  const increment = () => {
    return {
      type: 'INCREMENT'
    }
  }

  return (
    <div style={{ flex: 1 }}>
      GrandC2
      <h1>{count}</h1>
      <button onClick={() => dipatch(increment())}>Increment</button>
    </div>
  )
}

export default GrandC2