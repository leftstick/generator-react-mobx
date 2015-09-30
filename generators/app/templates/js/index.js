/**
 *  index.js, the starter.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
require.ensure([], function() {
    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure([], function() {
    var Entrance = require('./fw/Entrance');
    (new Entrance()).run();
});
