import React, {Component} from "react";
import Head from './Head'
import List from './List'
import Footer from './Footer'
import {getItemListAction} from '../store/actionCreators';
import {connect} from 'react-redux';

class TodoEntry extends Component {

    componentDidMount() {
        this.props.reqTodoList();
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
                    <Footer/>
                </div>
            </div>
        );
    }
}

// 实现配发
const mapDispatchToProps = (dispatch)=>{
    return{
        reqTodoList(){
            const action = getItemListAction();
            console.log(action);
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(TodoEntry);
