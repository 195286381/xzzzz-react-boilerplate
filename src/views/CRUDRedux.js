import { combineReducers } from 'redux'
import * as navActions from '../components/CRUD/NavRedux'
import navReducer from '../components/CRUD/NavRedux'

const reducer = combineReducers({
  nav: navReducer
})

export {
  navActions
}

export default reducer;
