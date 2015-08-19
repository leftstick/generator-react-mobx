'use strict';

import React from 'react';
import Mui from 'material-ui';
import event from 'Event';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    _onRightClick(e) {
        window.location.href = 'https://github.com/leftstick/generator-material-react';
        event.stop(e);
    }

    _onLeftClick(e) {
        window.location.href = '/';
        event.stop(e);
    }

    render() {
        let AppBar = Mui.AppBar;
        let IconButton = Mui.IconButton;
        return (
            <AppBar title="todos"
              iconClassNameLeft="fa fa-html5"
              iconElementRight={<IconButton iconClassName="fa fa-github-alt" tooltip="View Source" />}
              onLeftIconButtonTouchTap={this._onLeftClick}
              onRightIconButtonTouchTap={this._onRightClick} />
            );
    }
}

export default Header;
