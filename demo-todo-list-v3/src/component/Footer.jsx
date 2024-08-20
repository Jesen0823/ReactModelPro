import React, {Component} from 'react';
import store from "../store";
import {getCheckedAllItemAction, getDelCheckedItemAction} from "../store/actionCreators";

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = store.getState();

        this._handleStoreChanged = this._handleStoreChanged.bind(this);
        store.subscribe(this._handleStoreChanged);
    }

    render() {
        const {finishCount, todos} = this.state;
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => this._checkedAllTodo(finishCount !== todos.length)}
                        checked={finishCount === todos.length}
                    />
                </label>
                <span><span>已完成{finishCount}件</span> / 总计{todos.length}件</span>
                <button className="btn btn-warning" onClick={() => this._delCheckedTodo()}>清除已完成任务</button>
            </div>
        )
    }

    _checkedAllTodo(checked) {
        const action = getCheckedAllItemAction(checked);
        store.dispatch(action);
    }

    _delCheckedTodo() {
        const action = getDelCheckedItemAction();
        store.dispatch(action);
    }

    _handleStoreChanged() {
        this.setState(store.getState());
    }
}