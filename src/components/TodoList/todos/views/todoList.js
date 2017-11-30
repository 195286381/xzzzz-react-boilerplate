import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoItem from './todoItem'
import * as actions from '../actions'
import { toggleTodo, removeTodo } from  '../actions'
import { FilterTypes } from '../../../../constants'

const TodoList = ({ todos, filter, onToggleTodo, onRemoveTodo }) => {
  const visibleTodos = selectVisibleTodos(todos, filter)

  return (
    <ul className="todo-list">
      {
        visibleTodos.map(todoItem => {
          return (
            <TodoItem
              key={todoItem.id}
              text={todoItem.text}
              complete={todoItem.complete}
              onToggle={() => onToggleTodo(todoItem.id)}
              onRemove={() => onRemoveTodo(todoItem.id)}
            />
          )
        })
      }
    </ul>
  )
}

const selectVisibleTodos = (todos, filter) => {
  switch(filter.filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETE:
      return todos.filter(todo => todo.completed)
    case FilterTypes.UNCOMPLETE:
      return todos.filter(todo =>!todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state, ownerProps) => ({
  todos: state.todos,
  filter: state.filter
})

const mapDispatcherToProps = (dispatcher, ownerProps) => ({
  onToggleTodo: (id) => dispatcher(actions.toggleTodo(id)),
  onRemoveTodo: (id) => dispatcher(actions.removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatcherToProps)(TodoList)
