import React, {Component} from "react";
import Head from './component/Head'
import List from './component/List'
import Footer from './component/Footer'
import store  from "./store";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="todo-container">
                <div class="todo-wrap">
                    {/*头部*/}
                    <Head/>
                    {/*列表*/}
                    <List/>
                    {/*尾部*/}
                    {/*<Footer
                        finishedCount={finishCount}
                        totalCount={todos.length}
                        delCheckedTodo={this._delCheckedTodo}
                        checkedAllTodo={this._checkedAllTodo}
                    />*/}
                </div>
            </div>
        );
    }

    _removeTodoWithId = (todoId) => {
        const tempTodos = this.state.todos;
        let checkedCount = 0;
        tempTodos.forEach((todo, index) => {
            if (todo.id === todoId) {
                tempTodos.splice(index, 1);
            }
        })
        // 处理选中
        tempTodos.forEach((todo, index) => {
            if (todo.finished) {
                checkedCount += 1;
            }
        });
        this.setState({
            todos: tempTodos,
            finishCount: checkedCount
        })
    };

    _changeTodoChecked = (todoId, checked) => {
        const tempTodos = this.state.todos;
        let checkedCount = 0;
        tempTodos.forEach((todo, index) => {
            if (todo.id === todoId) {
                todo.finished = checked;
            }
            if (todo.finished) {
                checkedCount += 1;
            }
        })
        this.setState({
            todos: tempTodos,
            finishCount: checkedCount
        });
    }

    _addOneNewTodo = (todo) => {
        let tempTodos = this.state.todos;
        tempTodos.push(todo);
        // 更新状态
        this.setState({
            todos: tempTodos
        });
    };

    _delCheckedTodo = () => {
        const tempTodos = this.state.todos;
        let tempNoDel = [];
        tempTodos.forEach((todo, index) => {
            if (!todo.finished) {
                tempNoDel.push(todo)
            }
        });
        // 更新状态
        this.setState({
            todos: tempNoDel,
            finishCount: 0
        })
    };

    _checkedAllTodo = (checked) => {
        const tempTodos = this.state.todos;
        tempTodos.forEach((todo, index) => {
            todo.finished = checked;
        })

        this.setState({
            todos: tempTodos,
            finishCount: checked === true ? tempTodos.length : 0
        });
    };
}

export default App;
