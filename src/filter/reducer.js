import * as actionTypes from './actionTypes'
import { FilterTypes } from '../constants'
const initialState = {
  filter: FilterTypes.ALL,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_FILTER: {
      return {
        filter: action.payload.filter,
      }
    }
    default: return state
  }
}

export default reducer
