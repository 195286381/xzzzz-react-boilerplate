import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'
import DevTools from './DevTools'

const finalCreateStore = compose(
  // applyMiddleware()
  DevTools.instrument()
)(createStore)

const reducer = combineReducers(Object.assign(
  {},
  rootReducer,
))

const configureStore = (initialState) => {
  const store = finalCreateStore(reducer, initialState)
  return store
}

export default configureStore
