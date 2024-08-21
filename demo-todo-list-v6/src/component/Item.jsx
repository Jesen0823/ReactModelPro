import React, {Component} from 'react';
import {getDelItemAction, getChangeItemCheckAction, getAddNewItemAction} from "../store/actionCreators";
import {connect} from "react-redux";

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDelBtn: false
        }
    }

    render() {
        const {todo,removeItemEvent,changeTodoCheck} = this.props;
        const {showDelBtn} = this.state;

        return (
            <li
                onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        onChange={() => changeTodoCheck(todo.id, !todo.finished)}
                        checked={todo.finished}
                    />
                    <span>{todo.title}</span>
                </label>
                <button
                    className="btn btn-warning"
                    style={{display: showDelBtn ? 'block' : 'none'}}
                    onClick={() => removeItemEvent(todo.id)}
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
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItemEvent(todoId) {
            const action = getDelItemAction(todoId);
            dispatch(action);
        },
        changeTodoCheck(todoId, check) {
            const action = getChangeItemCheckAction(todoId, check);
            dispatch(action);
        }
    }
};

export default connect(null,mapDispatchToProps)(Item)