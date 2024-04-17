import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import countReducer from '../reducers/count.js'
import showReducer from '../reducers/show.js'

const reducer = combineReducers({
  countReducer,
  showReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store