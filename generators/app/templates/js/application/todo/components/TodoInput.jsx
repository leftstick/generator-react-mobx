'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import uuid from 'uuid';
import { isFunction, trim } from 'lodash';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',};
    }

    _onSubmit(e) {
        if(e.nativeEvent.keyCode !== 13){
            return;
        }
        if (isFunction(this.props.onTodoAdded) && trim(this.state.value)) {
            this.props.onTodoAdded({
                id: uuid.v1(),
                text: this.state.value
            });
        }
        this.setState({value: ''});
    }

    _valueChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        let inputStyle = {
            padding: '16px 16px 11px 60px',
            boxSizing: 'border-box'
        };
        let underlineStyle = {marginLeft: '-60px', bottom: '0px'};

        return (
            <div>
              <TextField hintText="What needs to be done?"
                fullWidth={ true }
                value={ this.state.value }
                onChange={ this._valueChange.bind(this) }
                style={ inputStyle }
                underlineStyle={ underlineStyle }
                onKeyDown={ this._onSubmit.bind(this) } />
            </div>
            );
    }
}

TodoInput.propTypes = {onTodoAdded: React.PropTypes.func};

export default TodoInput;
