'use strict';

import _ from 'lodash';
import React from 'react';
import Mui from 'material-ui';

import Header from './todo/components/Header.jsx';
import Footer from './todo/components/Footer.jsx';
import Panel from './todo/components/Panel.jsx';
import TodoInput from './todo/components/TodoInput.jsx';
import TodoList from './todo/components/TodoList.jsx';

let ThemeManager = new Mui.Styles.ThemeManager();

class Application extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
              <Header/>
              <Panel>
                <TodoInput />
                <TodoList />
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
