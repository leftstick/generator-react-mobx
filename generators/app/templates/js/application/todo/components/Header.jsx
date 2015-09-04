'use strict';

import React from 'react';
import { AppBar, IconButton } from 'material-ui';
import event from 'Event';
import _ from 'lodash';
import UI from 'UI';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {zDepth: 1};
        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _onRightClick(e) {
        console.log(e)
        window.location.href = 'https://github.com/leftstick/generator-material-react';
        event.stop(e);
    }

    _onLeftClick(e) {
        window.location.href = '/';
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
              iconClassNameLeft="fa fa-html5"
              iconElementRight={ <IconButton iconClassName="fa fa-github-alt" onClick={ this._onRightClick.bind(this) } tooltip="View Source" /> }
              onLeftIconButtonTouchTap={ this._onLeftClick.bind(this) }
              zDepth={ this.state.zDepth } />
            );
    }
}

export default Header;
