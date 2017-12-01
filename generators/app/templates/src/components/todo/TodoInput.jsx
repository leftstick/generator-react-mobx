import React from 'react'
import PropTypes from 'prop-types'

import { id } from '../../helper/string'
import { stop } from '../../helper/event'

import './TodoInput.css'

class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this._submitTodo = this._submitTodo.bind(this)
  }

  _submitTodo(e) {
    stop(e)
    if (!this.state.value || !this.state.value.trim()) {
      return
    }
    this.props.addTodo({
      id: id(),
      text: this.state.value.trim(),
      completed: false
    })
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this._submitTodo} styleName="todo-input-form">
        <input
          styleName="new-todo"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <input
          type="checkbox"
          styleName="toggle-all"
          checked={this.props.isAllCompleted}
          onChange={e => {
            this.props.toggleAll(e.target.checked)
          }}
        />
      </form>
    )
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  isAllCompleted: PropTypes.bool.isRequired,
  toggleAll: PropTypes.func.isRequired
}

export default TodoInput
