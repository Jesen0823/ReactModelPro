import React, {Component} from "react";
import Head from './component/Head'
import List from './component/List'
import Footer from './component/Footer'

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
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
