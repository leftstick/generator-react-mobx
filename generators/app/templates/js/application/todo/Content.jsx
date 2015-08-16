'use strict';

import React from 'react';
import Mui from 'material-ui';
import TodoInput from './TodoInput.jsx';

class Title extends React.Component {

    constructor(props) {
        super(props);
        let paperStyle = {
            minHeight: '350px',
            width: '850px',
            margin: '5px auto 0 auto',
            backgroundColor: Mui.Styles.Colors.blueGrey50
        };

        if (this._getWindowWidth() <= 850) {
            paperStyle.width = '100%';
        }
        this.state = {paperStyle};

        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _getWindowWidth() {
        let element = document.documentElement;
        let body = document.getElementsByTagName('body')[0];
        let width = window.innerWidth || element.clientWidth || body.clientWidth;
        return width;
    }

    _onResize(e) {
        let originalStyle = this.state.paperStyle;
        if (this._getWindowWidth() <= 850) {
            originalStyle.width = '100%';
        } else {
            originalStyle.width = '850px';
        }
        this.setState({paperStyle: originalStyle});
    }

    componentWillMount() {
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize, false);
    }

    render() {
        let Paper = Mui.Paper;

        return (
            <Paper style={this.state.paperStyle} zDepth={1} rounded={false}>
              <TodoInput/>
            </Paper>
            );
    }
}

export default Title;
