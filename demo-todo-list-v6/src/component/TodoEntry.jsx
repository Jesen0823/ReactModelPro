import React, {Component} from "react";
import Head from './Head'
import List from './List'
import Footer from './Footer'
import store from ".././store";
import {getItemListAction} from '../store/actionCreators';

class TodoEntry extends Component {

    componentDidMount() {
        const action = getItemListAction();
        store.dispatch(action);
        console.log(action);
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

export default TodoEntry;
