import React from 'react'
import { display, hide } from '../actions/show.js'
import { useSelector, useDispatch } from 'react-redux'

function Show() {
  const show = useSelector(store => store.showReducer.show)
  const disptach = useDispatch()

  return (
    <div>
      <button onClick={() => disptach(display())}>Display</button>
      <button onClick={() => disptach(hide())}>Hide</button>
      <br /><br />
      {show && <img src='https://appsembler.com/wp-content/uploads/2023/07/beemarrie_developer_marketing_computer_strategy_deda1786-e5df-4461-957a-01d758880ac0.png' alt='developer' />}
    </div>
  )
}

export default Show