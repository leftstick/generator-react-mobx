'use strict';

import React from 'react';
import { isFunction } from 'lodash';
import { Styles } from 'material-ui';

import Header from './todo/components/Header.jsx';
import Footer from './todo/components/Footer.jsx';
import Panel from './todo/components/Panel.jsx';
import TodoInput from './todo/components/TodoInput.jsx';
import TodoList from './todo/components/TodoList.jsx';
import StatusBar from './todo/components/StatusBar.jsx';

let ThemeManager = new Styles.ThemeManager();

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoList: [], filter: 'all'};
    }

    getChildContext() {
        return {muiTheme: ThemeManager.getCurrentTheme()};
    }

    componentWillMount() {
        ThemeManager.setTheme(ThemeManager.types.LIGHT);
    }

    _onTodoAdded(todo) {
        this.setState({
            todoList: [
                todo,
                ...this.state.todoList
            ]
        });
    }

    _onTodoDeleted(id) {
        this.setState({
            todoList: this.state.todoList.filter((todo) => todo.id !== id)
        });
    }

    _onTodoChanged(newTodo) {
        let newList = this.state.todoList.map((todo) => {
            if (todo.id === newTodo.id) {
                return newTodo;
            }
            return todo;
        });
        this.setState({todoList: newList});
    }

    _onChangeFilter(filter) {
        this.setState({filter: filter});
    }

    _cleanCompleted() {
        this.setState({
            todoList: this.state.todoList.filter((todo) => !todo.completed)
        });
    }

    render() {
        return (
            <div>
              <Header/>
              <Panel>
                <TodoInput onTodoAdded={ this._onTodoAdded.bind(this) } />
                <TodoList list={ this.state.todoList }
                  filter={ this.state.filter }
                  onTodoDeleted={ this._onTodoDeleted.bind(this) }
                  onTodoChanged={ this._onTodoChanged.bind(this) } />
                <StatusBar onCleanCompleted={ this._cleanCompleted.bind(this) }
                  list={ this.state.todoList }
                  filter={ this.state.filter }
                  onChangeFilter={ this._onChangeFilter.bind(this) } />
              </Panel>
              <Footer/>
            </div>
            );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Application;
