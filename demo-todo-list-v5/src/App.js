import React, {Component} from "react";
import Head from './component/Head'
import List from './component/List'
import Footer from './component/Footer'
import {getTodoList} from "./api";
import store from "./store";
import {getItemListAction} from "./store/actionCreators";

class App extends Component {

    componentDidMount() {
        // 告诉saga,我要让它帮我请求数据
        const action = getItemListAction();
        store.dispatch(action);
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

export default App;
