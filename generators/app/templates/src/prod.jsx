import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'

import store from './store'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

render(TodoApp)

function render(Component) {
  ReactDOM.render(<Component store={store} />, document.getElementById('application'))
}
