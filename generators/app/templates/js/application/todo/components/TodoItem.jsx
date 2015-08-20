'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDelete: false};
    }

    _showDeleteBtn(e){
        console.log(e);
        this.setState({showDelete: true});
    }

    _hideDeleteBtn(e){
        console.log('leave', e);
        this.setState({showDelete: false});
    }

    render() {
        let ListItem = Mui.ListItem;
        let ListDivider = Mui.ListDivider;
        let Checkbox = Mui.Checkbox;
        let IconButton = Mui.IconButton;
        let itemStyle = {MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none'};

        return (
            <div>
                <ListItem onMouseEnter={this._showDeleteBtn} onMouseLeave={this._hideDeleteBtn.bind(this)} style={itemStyle} primaryText={this.props.data.text} leftCheckbox={<Checkbox/>} rightIconButton={<IconButton style={{display: this.state.showDelete ? 'block' : 'none'}} iconClassName="fa fa-times"/>}></ListItem>
                <ListDivider  />
            </div>
            );
    }
}

export default TodoItem;
