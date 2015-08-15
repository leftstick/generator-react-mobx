'use strict';

import React from 'react';
import Mui from 'material-ui';
import Event from 'Event';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    _onRightClick(e) {
        window.location.href = 'https://github.com/leftstick/generator-material-react';
        Event.stop(e);
    }

    render() {
        let AppBar = Mui.AppBar;
        let IconButton = Mui.IconButton;
        return <AppBar title="Put Title Here"
                 iconClassNameLeft="fa fa-html5"
                 iconElementRight={<IconButton iconClassName="fa fa-github-alt" tooltip="View Source" />}
                 onRightIconButtonTouchTap={this._onRightClick}/>;
    }
}

export default Header;
