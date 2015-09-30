/**
 *  index.js, the starter.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {
    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure(['splash-screen'], function(require) {
    var Entrance = require('./fw/Entrance');
    (new Entrance()).run();
});
