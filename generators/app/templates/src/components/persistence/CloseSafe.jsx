import React from 'react'

import store from '../../store'

class CloseSafe extends React.Component {
  componentDidMount() {
    window.onbeforeunload = e => {
      store.saveTodoList()
    }
  }

  render() {
    return <div style={{ display: 'none' }} />
  }
}

export default CloseSafe
