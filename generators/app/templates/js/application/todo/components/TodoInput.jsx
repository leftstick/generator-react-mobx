import React from 'react';
import { TextField, Mixins } from 'material-ui';
import uuid from 'uuid';
import { isFunction, trim } from 'lodash';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    _onSubmit(e) {
        if (isFunction(this.props.onTodoAdded) && trim(this.refs.text.getValue())) {
            this.props.onTodoAdded({
                id: uuid.v1(),
                text: this.refs.text.getValue()
            });
        }
        this.refs.text.setValue('');
    }

    render() {
        let mergeAndPrefix = Mixins.StylePropable.mergeAndPrefix;
        let inputStyle = {
            padding: '16px 16px 11px 60px',
            boxSizing: 'border-box'
        };
        let underlineStyle = {marginLeft: '-60px', bottom: '0'};

        return (
            <div>
              <TextField hintText="What needs to be done?"
                ref="text"
                fullWidth={ true }
                style={ mergeAndPrefix(inputStyle) }
                underlineStyle={ mergeAndPrefix(underlineStyle) }
                onEnterKeyDown={ this._onSubmit.bind(this) } />
            </div>
            );
    }
}

TodoInput.propTypes = {onTodoAdded: React.PropTypes.func};

export default TodoInput;
