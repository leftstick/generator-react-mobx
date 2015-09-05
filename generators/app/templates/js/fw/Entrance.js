'use strict';

import Splash from 'splash-screen';
import React from 'react';
import Application from 'js/application/Application.jsx';

class Entrance {

    constructor() {
        require('font-awesome/css/font-awesome.css');
        require('less/main.less');
    }

    beforeStart() {
        React.initializeTouchEvents(true);
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }

    _destroySplash() {
        let _this = this;
        Splash.destroy();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this._destroySplash.bind(_this)();
            }
        }, 100);
    }

    launch() {
        React.render(<Application />, document.body);
    }

    run() {
        this.beforeStart();
        this._destroySplash();
        this.launch();
    }

}

export default Entrance;
