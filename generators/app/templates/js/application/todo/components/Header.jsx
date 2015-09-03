'use strict';

import React from 'react';
import Mui from 'material-ui';
import event from 'Event';
import _ from 'lodash';

class Header extends React.Component {

    constructor(props) {
        super(props);
        let zDepth = 1;
        this.state = {zDepth};
        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _onRightClick(e) {
        window.location.href = 'https://github.com/leftstick/generator-material-react';
        event.stop(e);
    }

    _onLeftClick(e) {
        window.location.href = '/';
        event.stop(e);
    }

    _getWindowWidth() {
        let element = document.documentElement;
        let body = document.getElementsByTagName('body')[0];
        let width = window.innerWidth || element.clientWidth || body.clientWidth;
        return width;
    }

    _onResize(e) {
        let zDepth = 1;
        if (this._getWindowWidth() <= 850) {
            zDepth = 0;
        }
        this.setState({zDepth});
    }

    componentWillMount() {
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize, false);
    }

    render() {
        let AppBar = Mui.AppBar;
        let IconButton = Mui.IconButton;
        return (
            <AppBar title="todos"
              iconClassNameLeft="fa fa-html5"
              iconElementRight={ <IconButton iconClassName="fa fa-github-alt" tooltip="View Source" /> }
              onLeftIconButtonTouchTap={ this._onLeftClick }
              onRightIconButtonTouchTap={ this._onRightClick }
              zDepth={ this.state.zDepth } />
            );
    }
}

export default Header;
