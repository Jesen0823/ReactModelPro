import React, {Component} from 'react';
import { getCheckedAllItemAction, getDelCheckedItemAction} from "../store/actionCreators";
import {connect} from "react-redux";

class Footer extends Component {

    render() {
        const {finishCount, todos,checkedAllTodo,delCheckedTodos} = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => checkedAllTodo(finishCount !== todos.length)}
                        checked={finishCount === todos.length}
                    />
                </label>
                <span><span>已完成{finishCount}件</span> / 总计{todos.length}件</span>
                <button className="btn btn-warning" onClick={() => delCheckedTodos()}>清除已完成任务</button>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        todos:state.todos,
        finishCount:state.finishCount
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        checkedAllTodo(checked) {
            const action = getCheckedAllItemAction(checked);
            dispatch(action);
        },
        delCheckedTodos() {
            const action = getDelCheckedItemAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Footer)