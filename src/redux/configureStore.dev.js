/**
 * 生产环境使用的 configure store
 */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import createFetchMiddleware from 'redux-composable-fetch'
import rootReducer from './reducers'
import DevTools from './DevTools'

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      })
    })
  },
})

const finalCreateStore = compose(
  applyMiddleware(
    ThunkMiddleware,
  ),
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
