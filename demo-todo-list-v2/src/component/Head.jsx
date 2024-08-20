import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Head extends Component{
    static propTypes = {
        lastTodoId: PropTypes.number.isRequired, // 现有数据的最后一条id
        addOneTodo:PropTypes.func.isRequired, //添加一条记录
    };

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
                    onKeyDown={(e)=>this._handleKeyEvent(e)}
                />
            </div>
        )
    }

    _handleKeyEvent(e){
        const {lastTodoId,addOneTodo} = this.props;

        // 判断是否是回车键
        if(13 === e.keyCode){
            if(!this.myInput.current.value){
                alert('输入内容不能为空！');
                return;
            }
            // 创建todo对象
            const newTodo = {id:lastTodoId+1,title:this.myInput.current.value,finished:false};
            addOneTodo(newTodo);
            // 清空控件
            this.myInput.current.value='';
        }
    }
}