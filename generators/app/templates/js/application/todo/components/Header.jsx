'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import event from 'Event';
import _ from 'lodash';
import UI from 'UI';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
        };
        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _onRightClick(e) {
        window.location.href = 'https://github.com/leftstick/generator-material-react';
        event.stop(e);
    }

    _onLeftClick(e) {
        window.location.href = 'http://leftstick.gitcafe.io/';
        event.stop(e);
    }

    _onResize(e) {
        this.setState({
            zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
        });
    }

    componentWillMount() {
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize, false);
    }

    render() {
        return (
            <AppBar title="todos"
              iconClassNameLeft="icon-html5"
              iconElementRight={ <IconButton iconClassName="icon-github-1" onClick={ this._onRightClick.bind(this) } tooltip="View Source" /> }
              onLeftIconButtonTouchTap={ this._onLeftClick.bind(this) }
              zDepth={ this.state.zDepth } />
            );
    }
}

export default Header;
