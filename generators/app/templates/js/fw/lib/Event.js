'use strict';

let Event = {};

Event.stop = (e) => {
    if (!e) {
        return;
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
    if (e.stopPropagation) {
        e.stopPropagation();
    }
};

export default Event;
