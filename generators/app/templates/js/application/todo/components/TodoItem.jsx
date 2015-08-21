'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDelete: true};
    }

    _showDeleteBtn(e) {
        console.log(e)
        this.setState({showDelete: true});
    }

    _hideDeleteBtn(e) {
        this.setState({showDelete: false});
    }

    _onDeleteItem(e) {
        console.log('delete ID', this.props.data.id);
    }

    _onCheckItem(e, checked) {
        console.log('check ID', this.props.data.id, checked);
    }

    render() {
        let ListItem = Mui.ListItem;
        let ListDivider = Mui.ListDivider;
        let Checkbox = Mui.Checkbox;
        let IconButton = Mui.IconButton;
        let itemStyle = {
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none'
        };
        let delBtnStyle = {
            display: this.state.showDelete ? 'block' : 'none'
        };

        return (
            <div>
              <ListItem onMouseEnter={ this._showDeleteBtn.bind(this) }
                onMouseLeave={ this._hideDeleteBtn.bind(this) }
                style={ itemStyle }
                primaryText={ this.props.data.text }
                leftCheckbox={ <Checkbox onCheck={ this._onCheckItem.bind(this) } /> }
                rightIconButton={ <IconButton style={ delBtnStyle } iconClassName="fa fa-times" onClick={ this._onDeleteItem.bind(this) } /> }></ListItem>
              <ListDivider />
            </div>
            );
    }
}

export default TodoItem;
