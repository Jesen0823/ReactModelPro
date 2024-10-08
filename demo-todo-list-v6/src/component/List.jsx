import React, {Component} from 'react';
import Item from '../component/Item'
import {connect} from 'react-redux';

class List extends Component {

    render() {
        const {todos} = this.props;

        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => (
                        <Item
                            key={index}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        todos:state.todos
    };
};

export default connect(mapStateToProps,null)(List)