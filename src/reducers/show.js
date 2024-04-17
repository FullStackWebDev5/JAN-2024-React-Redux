import { DISPLAY, HIDE } from '../actions/show.js'

const initialState = {
  show: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return {
        ...state,
        show: true
      }
    case HIDE:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}

export default reducer