import React from 'react'
import { useDispatch } from 'react-redux'

function GrandC1() {
  const dipatch = useDispatch()
  // Action Creator
  const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

  return (
    <div style={{ flex: 1 }}>
      GrandC1<br />
      <button onClick={() => dipatch(decrement())}>Decrement</button>
    </div>
  )
}

export default GrandC1