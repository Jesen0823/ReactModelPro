import React, {Component} from "react";
import Head from './Head'
import List from './List'
import Footer from './Footer'
import {getItemListAction} from '../store/actionCreators';
import {connect} from 'react-redux';

/*
* React-Redux
*
* 避免Redux中的store全局化，把store直接集成在React的顶层props里面，方便各个子组件能访问到顶层props.
* 解决手动监听state中数据改变 store.subscribe(render)
* Provider包装父组件，可以供子组件访问，比如可以将store作为参数放到Provider组件中，方便子组件访问。

* connect组件和store之间做关联。connect(mapStateToProps, mapDispatchToProps)(MyComponent)
* mapStateToProps: 把state映射到props中去，即把Redux中的数据映射到React组件中的props中去。
* 目的是把Redux中的state变成React组件中的props.
* mapDispatchToProps: 把dispatch也变成props，在组件中直接使用，避免了手动调用store.subscribe()设置回调函数监听
* */
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
