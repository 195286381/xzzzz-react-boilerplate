import * as actionTypes from './actionTypes'

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: {
    filter
  },
})
