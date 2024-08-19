import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    static propTypes = {
        finishedCount:PropTypes.number.isRequired, // 已完成数量
        totalCount:PropTypes.number.isRequired, //总数量
        delCheckedTodo:PropTypes.func.isRequired, // 删除选中的所有
        checkedAllTodo:PropTypes.func.isRequired, // 全选
    }

    render() {
        const {finishedCount,totalCount,delCheckedTodo,checkedAllTodo} = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        onChange={()=>checkedAllTodo(finishedCount!==totalCount)}
                        checked={finishedCount === totalCount}
                    />
                </label>
                <span><span>已完成{finishedCount}件</span> / 总计{totalCount}件</span>
                <button className="btn btn-warning" onClick={()=>delCheckedTodo()}>清除已完成任务</button>
            </div>
        )
    }
}