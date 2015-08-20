'use strict';

import React from 'react';
import Mui from 'material-ui';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: [{id: 's', text: 'nidayede'},{id: 'gh', text: '我是谁的老大爷呢'}]};
    }

    render() {
        let List = Mui.List;
        let ListItem = Mui.ListItem;
        let Checkbox = Mui.Checkbox;
        let _this = this;
        let listStyle = {paddingTop: '0'};

        return (
            <List style={listStyle}>
              { this.state.todos.map(function(todo, index) {
                  return <TodoItem key={todo.id} data={todo} isLast={_this.state.todos.length -1 === index}/>;
              })}
            </List>
            );
    }
}

export default TodoList;
