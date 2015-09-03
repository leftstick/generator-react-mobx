import React from 'react';
import Mui from 'material-ui';
import uuid from 'uuid';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {txt: ''};
    }

    _onSubmit(e) {
        if (typeof this.props.onTodoAdded === 'function') {
            this.props.onTodoAdded({
                id: uuid.v1(),
                text: this.refs.text.getValue()
            });
        }
        this.refs.text.setValue('');
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
                ref="text"
                fullWidth={ true }
                style={ inputStyle }
                underlineStyle={ underlineStyle }
                onEnterKeyDown={ this._onSubmit.bind(this) } />
            </div>
            );
    }
}

export default TodoInput;
