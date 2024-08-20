import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDelBtn: false
        }
    }

    static propTypes = {
        todo: PropTypes.object.isRequired,
        removeTodo: PropTypes.func.isRequired,
        changeTodoCheck:PropTypes.func.isRequired
    }

    render() {
        const {todo,removeTodo,changeTodoCheck} = this.props;
        const {showDelBtn} = this.state;

        return (
            <li
                onMouseOver={() => this._hasShowBtn(true)}
                onMouseOut={() => this._hasShowBtn(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        onChange={()=>changeTodoCheck(todo.id,!todo.finished)}
                        checked={todo.finished}
                    />
                    <span>{todo.title}</span>
                </label>
                <button
                    className="btn btn-warning"
                    style={{display: showDelBtn ? 'block' : 'none'}}
                    onClick={() => removeTodo(todo.id)}
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