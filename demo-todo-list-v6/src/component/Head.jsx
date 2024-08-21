import React, {Component} from 'react';
import {getAddNewItemAction} from "../store/actionCreators";
import {connect} from 'react-redux';

class Head extends Component {

    constructor(props) {
        super(props);

        // 绑定ref
        this.myInput = React.createRef();
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    ref={this.myInput}
                    type="text"
                    placeholder="请输入任务，按回车键确认"
                    onKeyDown={(e) => this._handleKeyEvent(e)}
                />
            </div>
        )
    }

    _handleKeyEvent(e) {
        const {todos} = this.props;
        const lastTodoId = todos.length === 0 ? 0 : todos[todos.length - 1].id;
        // 判断是否是回车键
        if (13 === e.keyCode) {
            if (!this.myInput.current.value) {
                alert('输入内容不能为空！');
                return;
            }
            // 创建todo对象
            const newTodo = {id: lastTodoId + 1, title: this.myInput.current.value, finished: false};
            this.props.addNewTodoItem(newTodo);
            // 清空控件
            this.myInput.current.value = '';
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        todos:state.todos
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addNewTodoItem(todo){
            const action = getAddNewItemAction(todo);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Head)