import React from 'react'
import { observer, PropTypes } from 'mobx-react'

import { stop } from '../../helper/event'

import S from './TodoStatus.css'

@observer
class TodoStatus extends React.Component {
  _updateFilter(e, filter) {
    stop(e)
    this.props.store.updateFilter(filter)
  }

  render() {
    const remainingUnit = this.props.store.remainingCount > 1 ? 'items left' : 'item left'
    return (
      <div styleName="todo-status">
        <span styleName="todo-count">
          <strong>{this.props.store.remainingCount}</strong>
          &nbsp;
          {remainingUnit}
        </span>
        <ul styleName="filters">
          <li>
            <a
              className={this.props.store.filter === 'all' ? S.selected : ''}
              href=""
              onClick={e => this._updateFilter(e, 'all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={this.props.store.filter === 'active' ? S.selected : ''}
              href=""
              onClick={e => this._updateFilter(e, 'active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={this.props.store.filter === 'completed' ? S.selected : ''}
              href=""
              onClick={e => this._updateFilter(e, 'completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {this.props.store.todoList.length - this.props.store.remainingCount ? (
          <button styleName="clear-completed" onClick={() => this.props.store.cleanCompleteTodos()}>
            Clear completed
          </button>
        ) : null}
      </div>
    )
  }
}

TodoStatus.propTypes = {
  store: PropTypes.observableObject
}

export default TodoStatus
