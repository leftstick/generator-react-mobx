'use strict';

import React from 'react';
import { ListItem, ListDivider, TextField, Checkbox, IconButton, Styles, Mixins } from 'material-ui';
import { isFunction, clone, trim } from 'lodash';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
            itemStyle: this._getItemStyle(this.props.data.completed, true),
            txtStyle: this._getTextStyle(false)
        };
    }

    _getItemStyle(completed, shouldDisplay) {
        let itemStyle = {
            display: shouldDisplay ? 'block' : 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? Styles.Colors.grey500 : Styles.Colors.black
        };
        return itemStyle;
    }

    _getTextStyle(shouldDisplay) {
        let txtStyle = {
            display: shouldDisplay ? 'block' : 'none',
            padding: '16px 16px 11px 60px',
            boxSizing: 'border-box'
        };
        return txtStyle;
    }

    _showDeleteBtn(e) {
        this.setState({showDelete: true});
    }

    _hideDeleteBtn(e) {
        this.setState({showDelete: false});
    }

    _onDeleteItem(e) {
        if (!isFunction(this.props.onDelete)) {
            return;
        }
        this.props.onDelete(this.props.data.id);
    }

    _onCheckItem(e, checked) {
        this.setState({
            itemStyle: this._getItemStyle(checked, true)
        });

        if (isFunction(this.props.onChange)) {
            var newTodo = clone(this.props.data);
            newTodo.completed = checked;
            this.props.onChange(newTodo);
        }
    }

    _runInEdit() {
        this.setState({
            itemStyle: this._getItemStyle(this.props.data.completed, false),
            txtStyle: this._getTextStyle(true)
        });
    }

    _saveEdit() {
        if (!trim(this.refs.txt.getValue())) {
            return;
        }
        this.setState({
            itemStyle: this._getItemStyle(this.props.data.completed, true),
            txtStyle: this._getTextStyle(false)
        });
        if (isFunction(this.props.onChange)) {
            var newTodo = clone(this.props.data);
            newTodo.text = this.refs.txt.getValue();
            this.props.onChange(newTodo);
        }
    }

    render() {
        let mergeAndPrefix = Mixins.StylePropable.mergeAndPrefix;

        let delBtnStyle = {
            display: this.state.showDelete ? 'block' : 'none'
        };
        let underlineStyle = {marginLeft: '-60px', bottom: '0'};

        return (
            <div>
              <ListItem onMouseEnter={ this._showDeleteBtn.bind(this) }
                onMouseLeave={ this._hideDeleteBtn.bind(this) }
                style={ mergeAndPrefix(this.state.itemStyle) }
                primaryText={ this.props.data.text }
                leftIcon={ <Checkbox onCheck={ this._onCheckItem.bind(this) } defaultChecked={ this.props.data.completed } /> }
                rightIconButton={ <IconButton style={ mergeAndPrefix(delBtnStyle) } iconClassName="fa fa-times" onClick={ this._onDeleteItem.bind(this) } /> }
                onDoubleClick={ this._runInEdit.bind(this) }></ListItem>
              <TextField ref="txt"
                style={ mergeAndPrefix(this.state.txtStyle) }
                underlineStyle={ mergeAndPrefix(underlineStyle) }
                fullWidth={ true }
                defaultValue={ this.props.data.text }
                onBlur={ this._saveEdit.bind(this) }
                onEnterKeyDown={ this._saveEdit.bind(this) }></TextField>
              <ListDivider />
            </div>
            );
    }
}

TodoItem.propTypes = {
    data: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    onChange: React.PropTypes.func
};

export default TodoItem;
