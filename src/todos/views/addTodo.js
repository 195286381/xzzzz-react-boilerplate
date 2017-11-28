import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../actions'

class AddTodo extends Component {
  constructor() {
    super(...arguments)

    this.onSubmit = this.onSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)

    this.state = {
      inputValue: '',
    }
  }

  handleInput(e) {
    const value = e.target.value
    this.setState({
      inputValue: value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const { inputValue } = this.state
    const { onAdd } = this.props
    const input = inputValue.trim()
    onAdd(input)
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="new-todo" value={this.state.inputValue} onChange={this.handleInput} />
          <button type="submit" className="add-btn">添加</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownerProps) => ({

})

const mapDispatcherToProps = (dispatcher, ownerProps) => ({
 onAdd: (text) => dispatcher(actions.addTodo(text))
})

export default connect(mapStateToProps, mapDispatcherToProps)(AddTodo)
