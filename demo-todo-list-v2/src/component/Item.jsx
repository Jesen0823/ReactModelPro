import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "../store";
import {getDelItemAction,getChangeItemCheckAction} from "../store/actionCreators";

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDelBtn: false
        }
    }

    static propTypes = {
        todo: PropTypes.object.isRequired,
    }

    render() {
        const {todo} = this.props;
        const {showDelBtn} = this.state;

        return (
            <li
                onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        onChange={()=>this._changeTodoCheck(todo.id,!todo.finished)}
                        checked={todo.finished}
                    />
                    <span>{todo.title}</span>
                </label>
                <button
                    className="btn btn-warning"
                    style={{display: showDelBtn ? 'block' : 'none'}}
                    onClick={() => this._removeItemEvent(todo.id)}
                >
                    删除
                </button>
            </li>
        )
    }

    _hasShowBtn(show) {
        this.setState({
            showDelBtn: show
        })
    }

    _removeItemEvent(todoId){
        const action = getDelItemAction(todoId);
        store.dispatch(action);
    }

    _changeTodoCheck(todoId,check){
        const action = getChangeItemCheckAction(todoId,check);
        store.dispatch(action);
    }
}