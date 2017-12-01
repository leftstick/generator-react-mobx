import React from 'react'
import { observer } from 'mobx-react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'

import store from '../../store'

import './TodoPanel.css'

@observer
class TodoPanel extends React.Component {
  render() {
    return (
      <div styleName="todo-panel">
        <TodoInput
          isAllCompleted={store.isAllCompleted}
          addTodo={todo => {
            store.addTodo(todo)
          }}
          toggleAll={state => {
            store.toggleAll(state)
          }}
        />
        <TodoList store={store} />
        <TodoStatus store={store} />
      </div>
    )
  }
}

export default TodoPanel
