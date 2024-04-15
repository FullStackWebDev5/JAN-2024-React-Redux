import React from 'react'
import GrandC1 from './GrandC1'
import GrandC2 from './GrandC2'

function Child1() {
  return (
    <div style={{ flex: 1 }}>
      Child1
      <div style={{display: 'flex'}}>
        <GrandC1 />
        <GrandC2 />
      </div>
    </div>
  )
}

export default Child1