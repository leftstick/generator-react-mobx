'use strict';

import Reflux from 'reflux';
import AddTodoAction from '../actions/AddTodo';

var Todos = Reflux.createStore({
    listenables: [
        AddTodoAction
    ],
    todolist: []
});

export default Todos;
