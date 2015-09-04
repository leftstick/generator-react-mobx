'use strict';

import React from 'react';
import { Mixins } from 'material-ui';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '15px'
        };
        let mergeAndPrefix = Mixins.StylePropable.mergeAndPrefix;
        return (
            <footer style={ mergeAndPrefix(footerStyle) }>
              <span>{ '\u00A9 2015 Howard.Zuo, All rights reserved.' }</span>
            </footer>
            );
    }
}

export default Footer;
