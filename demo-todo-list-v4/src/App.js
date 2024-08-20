import React, {Component} from "react";
import Head from './component/Head'
import List from './component/List'
import Footer from './component/Footer'
import {getTodoList} from "./api";
import store from "./store";
import {getItemListAction} from "./store/actionCreators";

class App extends Component {

    componentDidMount() {
        this._reqTodoList();
    }

    async _reqTodoList(){
        const result = await getTodoList();
        console.log(result);
        if (result.success_code === 200){
            const action = getItemListAction(result.items);
            store.dispatch(action);
        }
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
