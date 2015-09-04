'use strict';

import React from 'react';
import { List, ListItem, Checkbox } from 'material-ui';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
              { this.props.list.filter(filterHandler).map(function(todo) {
                    return <TodoItem onDelete={ _this.props.onTodoDeleted }
                             onChange={ _this.props.onTodoChanged }
                             key={ todo.id }
                             data={ todo } />;
                }) }
            </List>
            );
    }
}

TodoList.propTypes = {
    list: React.PropTypes.array,
    filter: React.PropTypes.string,
    onTodoDeleted: React.PropTypes.func,
    onTodoChanged: React.PropTypes.func
};

export default TodoList;
