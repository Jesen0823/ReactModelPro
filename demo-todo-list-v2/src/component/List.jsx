import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../component/Item'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        removeTodo:PropTypes.func.isRequired, //删除一条记录
        changeTodoCheck:PropTypes.func.isRequired
    };

    render() {
        const {todos,removeTodo,changeTodoCheck} = this.props;

        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => (
                        <Item
                            key={index}
                            todo={todo}
                            removeTodo={removeTodo}
                            changeTodoCheck = {changeTodoCheck}
                        />
                    ))
                }
            </ul>
        )
    }
}