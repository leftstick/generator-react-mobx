/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

require.ensure([], function() {
    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure([], function() {
    var Entrance = require('./fw/Entrance');
    (new Entrance()).run();
});
