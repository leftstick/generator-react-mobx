import React from 'react';
import UI from 'UI';
import { RaisedButton, FlatButton, Mixins } from 'material-ui';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countStyle: this._getCountStyle(),
            clearStyle: this._getClearStyle(this.props)
        };
        this._onResize = _.debounce(this._onResize, 150).bind(this);
    }

    _getActiveTodos(props) {
        return props.list.filter((todo) => !todo.completed);
    }

    _getCompletedTodos(props) {
        return props.list.filter((todo) => todo.completed);
    }

    _onResize(e) {
        this.setState({
            countStyle: this._getCountStyle(),
            clearStyle: this._getClearStyle(this.props)
        });
    }

    componentWillMount() {
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize, false);
    }

    _getCountStyle() {
        let countStyle = {
            position: 'absolute',
            left: '15px',
            height: '36px',
            lineHeight: '36px',
            display: 'block'
        };
        if (UI.windowWidth() <= UI.BREAK_POINT) {
            countStyle.display = 'none';
        }
        return countStyle;
    }

    _getClearStyle(props) {
        let clearStyle = {
            position: 'absolute',
            right: '5px',
            top: '0',
            display: this._getCompletedTodos(props).length ? 'block' : 'none'
        };
        if (UI.windowWidth() <= UI.BREAK_POINT) {
            clearStyle.display = 'none';
        }
        return clearStyle;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            clearStyle: this._getClearStyle(nextProps)
        });
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

    _cleanCompleted() {
        if (typeof this.props.onCleanCompleted !== 'function') {
            return;
        }
        this.props.onCleanCompleted();
    }

    render() {
        let mergeAndPrefix = Mixins.StylePropable.mergeAndPrefix;
        let leftLen = this._getActiveTodos(this.props).length;
        let itemStr = leftLen > 1 ? 'items' : 'item';
        let barStyle = {
            display: this.props.list.length ? 'block' : 'none',
            textAlign: 'center',
            position: 'relative'
        };

        return (
            <div style={ mergeAndPrefix(barStyle) }>
              <span style={ mergeAndPrefix(this.state.countStyle) }>{ leftLen } { itemStr } left</span>
              <RaisedButton label="All" secondary={ this.props.filter === 'all' } onClick={ this._changeFilter.bind(this, 'all') } />&nbsp;&nbsp;&nbsp;&nbsp;
              <RaisedButton label="Active" secondary={ this.props.filter === 'active' } onClick={ this._changeFilter.bind(this, 'active') } />&nbsp;&nbsp;&nbsp;&nbsp;
              <RaisedButton label="Completed" secondary={ this.props.filter === 'completed' } onClick={ this._changeFilter.bind(this, 'completed') } />
              <FlatButton label="Clear completed" style={ mergeAndPrefix(this.state.clearStyle) } onClick={ this._cleanCompleted.bind(this) } />
            </div>
            );
    }
}

StatusBar.propTypes = {
    list: React.PropTypes.array,
    onChangeFilter: React.PropTypes.func,
    onCleanCompleted: React.PropTypes.func,
    filter: React.PropTypes.string
};

export default StatusBar;
