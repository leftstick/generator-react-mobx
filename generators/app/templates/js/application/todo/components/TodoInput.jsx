import React from 'react';
import Mui from 'material-ui';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    _onSubmit(e) {
        if (e.keyCode !== 13) {
            return;
        }
        console.log(e.target.value);
        e.target.value = '';
    }

    render() {
        let TextField = Mui.TextField;
        let inputStyle = {
            padding: '16px 16px 16px 60px',
            boxSizing: 'border-box'
        };
        let underlineStyle = {marginLeft: '-60px', bottom: '0'};

        return (
            <div>
              <TextField hintText="What needs to be done?"
                fullWidth={ true }
                style={ inputStyle }
                underlineStyle={ underlineStyle }
                onKeyUp={ this._onSubmit.bind(this) } />
            </div>
            );
    }
}

export default TodoInput;
