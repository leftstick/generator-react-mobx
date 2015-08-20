'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let TextField = Mui.TextField;
        let inputStyle = {padding: '16px 16px 16px 60px', boxSizing: 'border-box'};
        let underlineStyle = {marginLeft: '-60px', bottom: '0'};

        return (
           <div>
                <TextField hintText="What needs to be done?"
                    fullWidth={true}
                    style={inputStyle}
                    underlineStyle={underlineStyle}/>
           </div>
            );
    }
}

export default TodoInput;
