import React from 'react';
import Mui from 'material-ui';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        let countStyle = {
            float: 'left',
            marginLeft: '15px',
            height: '36px',
            lineHeight: '36px',
            display: 'block'
        };
        let clearStyle = {
            float: 'right',
            marginRight: '15px',
            display: this._getActiveTodos().length !== this.props.list.length ? 'block' : 'none'
        };
        this.state = {
            countStyle: countStyle,
            clearStyle: clearStyle
        };
        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _getActiveTodos() {
        return this.props.list.filter((todo) => !todo.completed);
    }

    _getWindowWidth() {
        let element = document.documentElement;
        let body = document.getElementsByTagName('body')[0];
        let width = window.innerWidth || element.clientWidth || body.clientWidth;
        return width;
    }

    _onResize(e) {
        let countStyle = {
            float: 'left',
            marginLeft: '15px',
            height: '36px',
            lineHeight: '36px',
            display: 'block'
        };
        let clearStyle = {
            float: 'right',
            marginRight: '15px',
            display: this._getActiveTodos().length !== this.props.list.length ? 'block' : 'none'
        };
        if (this._getWindowWidth() <= 850) {
            countStyle.display = 'none';
            clearStyle.display = 'none';
        }
        this.setState({
            countStyle: countStyle,
            clearStyle: clearStyle
        });
    }

    componentWillMount() {
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize, false);
    }

    componentWillReceiveProps() {
        let clearStyle = {
            float: 'right',
            marginRight: '15px',
            display: this._getActiveTodos().length !== this.props.list.length ? 'block' : 'none'
        };
        this.setState({clearStyle: clearStyle});
    }

    _changeFilter(filter, e) {
        if (typeof this.props.onChangeFilter !== 'function') {
            return;
        }
        if (filter === this.props.filter) {
            return;
        }
        this.props.onChangeFilter(filter);
    }

    render() {
        let RaisedButton = Mui.RaisedButton;
        let FlatButton = Mui.FlatButton;
        let leftLen = this._getActiveTodos().length;
        let itemStr = leftLen > 1 ? 'items' : 'item';
        let barStyle = {
            display: this.props.list.length ? 'block' : 'none',
            textAlign: 'center'
        };

        return (
            <div style={ barStyle }>
              <span style={ this.state.countStyle }>{ leftLen } { itemStr } left</span>
              <RaisedButton label="All" secondary={ this.props.filter === 'all' } onClick={ this._changeFilter.bind(this, 'all') } />&nbsp;&nbsp;&nbsp;&nbsp;
              <RaisedButton label="Active" secondary={ this.props.filter === 'active' } onClick={ this._changeFilter.bind(this, 'active') } />&nbsp;&nbsp;&nbsp;&nbsp;
              <RaisedButton label="Completed" secondary={ this.props.filter === 'completed' } onClick={ this._changeFilter.bind(this, 'completed') } />
              <FlatButton label="Clear completed" style={ this.state.clearStyle } />
              <div style={ {clear: 'both'} }></div>
            </div>
            );
    }
}

export default StatusBar;
