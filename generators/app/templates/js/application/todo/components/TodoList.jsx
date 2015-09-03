'use strict';

import React from 'react';
import Mui from 'material-ui';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let List = Mui.List;
        let ListItem = Mui.ListItem;
        let Checkbox = Mui.Checkbox;
        let _this = this;
        let listStyle = {
            paddingTop: '0',
            display: this.props.list.length ? 'block' : 'none'
        };

        var filterHandler = (todo) => {
            if (this.props.filter === 'all') {
                return true;
            }
            if (this.props.filter === 'completed') {
                return todo.completed;
            }
            return !todo.completed;
        };

        return (
            <List style={ listStyle }>
              { this.props.list.filter(filterHandler).map(function(todo, index) {
                    return <TodoItem onDelete={ _this.props.onTodoDeleted }
                             onChange={ _this.props.onTodoChanged }
                             key={ todo.id }
                             data={ todo } />;
                }) }
            </List>
            );
    }
}

export default TodoList;
