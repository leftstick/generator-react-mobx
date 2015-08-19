'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let TextField = Mui.TextField;
        let inputStyle = {margin: '0 40px'};
        let inputUnderlineStyle = {marginLeft: '-40px'};

        return (
            <TextField hintText="What needs to be done?"
              fullWidth={true}
              style={inputStyle}
              underlineStyle={inputUnderlineStyle}/>
            );
    }
}

export default TodoInput;
