'use strict';

import _ from 'lodash';
import React from 'react';
import Mui from 'material-ui';

import Header from './todo/components/Header.jsx';
import Footer from './todo/components/Footer.jsx';
import Panel from './todo/components/Panel.jsx';
import TodoInput from './todo/components/TodoInput.jsx';
import TodoList from './todo/components/TodoList.jsx';
import StatusBar from './todo/components/StatusBar.jsx';

let ThemeManager = new Mui.Styles.ThemeManager();

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoList: [], filter: 'all'};
    }

    getChildContext() {
        return {muiTheme: ThemeManager.getCurrentTheme()};
    }

    componentWillMount() {
        if (_.isFunction(this.props.onLoad)) {
            this.props.onLoad();
        }
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

    _onTodoChanged(id, checked) {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                var t = Object.create(todo);
                if (todo.id === id) {
                    todo.completed = checked;
                }
                return t;
            })
        });
    }

    _onChangeFilter(filter) {
        this.setState({filter: filter});
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
                <StatusBar list={ this.state.todoList } filter={ this.state.filter } onChangeFilter={ this._onChangeFilter.bind(this) } />
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
