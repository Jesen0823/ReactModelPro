// 1. redux-thunk 是一个redux中间件，用来处理复杂逻辑，如异步请求
// 2. redux-thunk中间件可以让action创建函数不仅仅返回一个action对象，也可以返回一个函数

import {
    DEL_TODO_ITEM,
    CHANGE_ITEM_CHECK,
    ADD_NEW_ITEM,
    DEL_CHECKED_ITEM,
    ALL_CHECKED_OR_NOT_ITEM,
    GET_ALL_ITEM,
} from './actionType';
import {getTodoList} from "../api";
import store from "./index";

export const getItemListAction = () => {
    return (dispatch)=>{
        getTodoList().then((res)=>{
            console.log(res);
            if (res.success_code === 200){
                const todos = res.items;
                store.dispatch({
                    type:GET_ALL_ITEM,
                    todos
                });
            }
        });
    }
};

// 删除一条记录
export const getDelItemAction = (todoId) => ({
    type: DEL_TODO_ITEM,
    todoId
});

// 点选一条记录
export const getChangeItemCheckAction = (todoId, checked) => ({
    type: CHANGE_ITEM_CHECK,
    todoId,
    checked
});

// 添加一条记录
export const getAddNewItemAction = (todo) => ({
    type: ADD_NEW_ITEM,
    todo
})

// 删除已完成或已选中的任务
export const getDelCheckedItemAction = () => ({
    type: DEL_CHECKED_ITEM,
})

// 全选或反选所有任务
export const getCheckedAllItemAction = (checked) => ({
    type: ALL_CHECKED_OR_NOT_ITEM,
    checked
})