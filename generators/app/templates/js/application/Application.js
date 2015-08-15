'use strict';

import React from 'react';
import Mui from 'material-ui';

import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';

let ThemeManager = new Mui.Styles.ThemeManager();

class Application extends React.Component {

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {muiTheme: ThemeManager.getCurrentTheme()};
    }

    componentWillMount() {
        ThemeManager.setTheme(ThemeManager.types.LIGHT);
    }

    render() {
        return (
            <div>
              <Header/>
              <Footer/>
            </div>
            );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Application;
