import React from 'react'
import { PropTypes, observer } from 'mobx-react'

import TodoItem from './TodoItem.jsx'

import './TodoList.css'

@observer
class TodoList extends React.Component {
  render() {
    return (
      <ul styleName="todo-list">
        {this.props.store.todoList
          .filter(todo => filterHandler(todo, this.props.store.filter))
          .map(todo => (
            <TodoItem
              editData={this.props.store.editTodo}
              data={todo}
              key={todo.id}
              onDelete={todo => this.props.store.deleteTodo(todo)}
              onUpdate={todo => this.props.store.updateTodo(todo)}
              onSetEdit={todo => this.props.store.setEditTodo(todo)}
            />
          ))}
      </ul>
    )
  }
}

function filterHandler(todo, filter) {
  if (filter === 'all') {
    return true
  }
  if (filter === 'active') {
    return !todo.completed
  }
  return todo.completed
}

TodoList.propTypes = {
  store: PropTypes.observableObject
}

export default TodoList
