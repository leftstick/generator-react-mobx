import React from 'react'
import DevTools from 'mobx-react-devtools'

import { PropTypes } from 'mobx-react'

import TodoHeader from './header/TodoHeader'
import TodoPanel from './todo/TodoPanel'
import TodoFooter from './footer/TodoFooter'
import CloseSafe from './persistence/CloseSafe'

import './TodoApp.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.props.store.reset()
  }

  render() {
    return (
      <div styleName="todoapp">
        <DevTools />
        <CloseSafe />
        <TodoHeader />
        <TodoPanel />
        <TodoFooter />
      </div>
    )
  }
}

TodoApp.propTypes = {
  store: PropTypes.observableObject
}

export default TodoApp
