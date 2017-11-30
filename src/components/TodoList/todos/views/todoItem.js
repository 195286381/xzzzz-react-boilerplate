import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({onToggle, onRemove, complete, text}) => {
  const checkProp = complete ? {checked: true}: {}

  return (
    <li
      className="todo-items"
    >
      <input type="checkbox" className="toggle" {...checkProp} readOnly onClick={onToggle} />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>x</button>
    </li>
  )
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default TodoItem
