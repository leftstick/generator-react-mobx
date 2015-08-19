'use strict';

import React from 'react';
import Mui from 'material-ui';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let List = Mui.List;
        let ListItem = Mui.ListItem;
        let Checkbox = Mui.Checkbox;

        return (
            <List>
              <ListItem primaryText="infoasds" leftCheckbox={<Checkbox />}></ListItem>
            </List>
            );
    }
}

TodoList.defaultProps = {todos: []};

export default TodoList;
