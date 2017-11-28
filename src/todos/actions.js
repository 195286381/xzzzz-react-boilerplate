import * as actionTypes from './actionTypes'

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    text,
  }
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id,
  }
})

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: {
    id,
  }
})
