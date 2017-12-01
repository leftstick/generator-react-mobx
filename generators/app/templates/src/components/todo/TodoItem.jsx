import React from 'react'
import PropTypes from 'prop-types'

import { SHAPE_TODO } from '../../store/model'
import { stop } from '../../helper/event'
import S from './TodoItem.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editValue: props.data.text
    }

    this._finishEdit = this._finishEdit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editValue: nextProps.data.text
    })
  }

  _finishEdit(e) {
    stop(e)
    this.props.onUpdate(Object.assign({}, this.props.data, { text: this.state.editValue }))
    this._setEditData()
  }

  _setEditData(data = null) {
    this.props.onSetEdit(data)
  }

  _getContent() {
    if (this.props.data === this.props.editData) {
      return (
        <form onSubmit={this._finishEdit} styleName="edit-form">
          <input
            styleName="edit"
            value={this.state.editValue}
            onChange={e => {
              this.setState({
                editValue: e.target.value
              })
            }}
            onBlur={() => this._setEditData()}
          />
        </form>
      )
    }
    return (
      <div>
        <input
          styleName="toggle"
          type="checkbox"
          checked={this.props.data.completed}
          onChange={() => {
            this.props.onUpdate(Object.assign({}, this.props.data, { completed: !this.props.data.completed }))
          }}
        />
        <label styleName="label" onDoubleClick={() => this._setEditData(this.props.data)}>
          {this.props.data.text}
        </label>
        <button
          styleName="destroy"
          onClick={() => {
            this.props.onDelete(this.props.data)
          }}
        />
      </div>
    )
  }

  render() {
    const completeClass = this.props.data.completed ? S.completed : ''

    return (
      <li className={completeClass} styleName="todo-item">
        {this._getContent()}
      </li>
    )
  }
}

TodoItem.propTypes = {
  editData: SHAPE_TODO,
  data: SHAPE_TODO,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onSetEdit: PropTypes.func
}

export default TodoItem
