'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
            itemStyle: {
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                textDecoration: this.props.data.completed ? 'line-through' : 'none',
                color: Mui.Styles.Colors.black
            }
        };
    }

    _showDeleteBtn(e) {
        this.setState({showDelete: true});
    }

    _hideDeleteBtn(e) {
        this.setState({showDelete: false});
    }

    _onDeleteItem(e) {
        if (typeof this.props.onDelete !== 'function') {
            return;
        }
        this.props.onDelete(this.props.data.id);
    }

    _onCheckItem(e, checked) {
        this.setState({
            itemStyle: {
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                textDecoration: checked ? 'line-through' : 'none',
                color: checked ? Mui.Styles.Colors.grey500 : Mui.Styles.Colors.black
            }
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.props.data.id, checked);
        }
    }

    render() {
        let ListItem = Mui.ListItem;
        let ListDivider = Mui.ListDivider;
        let Checkbox = Mui.Checkbox;
        let IconButton = Mui.IconButton;

        let delBtnStyle = {
            display: this.state.showDelete ? 'block' : 'none'
        };

        return (
            <div>
              <ListItem onMouseEnter={ this._showDeleteBtn.bind(this) }
                onMouseLeave={ this._hideDeleteBtn.bind(this) }
                style={ this.state.itemStyle }
                primaryText={ this.props.data.text }
                leftIcon={ <Checkbox onCheck={ this._onCheckItem.bind(this) } defaultChecked={ this.props.data.completed } /> }
                rightIconButton={ <IconButton style={ delBtnStyle } iconClassName="fa fa-times" onClick={ this._onDeleteItem.bind(this) } /> }></ListItem>
              <ListDivider />
            </div>
            );
    }
}

export default TodoItem;
