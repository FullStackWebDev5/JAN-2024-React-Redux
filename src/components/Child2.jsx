import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
  // Subscribe
  const count = useSelector(store => store.count)
  return (
    <div style={{ flex: 1 }}>
      Child2
      <h1>{count}</h1>
    </div>
  )
}

export default Child2