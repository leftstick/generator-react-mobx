'use strict';

import React from 'react';
import Mui from 'material-ui';
import event from 'Event';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center'
        };
        return (
            <footer style={footerStyle}>
              <span>{'\u00A9 2015 Howard.Zuo, All rights reserved.'}</span>
            </footer>);
    }
}

export default Footer;
