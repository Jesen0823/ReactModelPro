// 1. redux-thunk 是一个redux中间件，用来处理复杂逻辑，如异步请求
// 2. redux-thunk中间件可以让action创建函数不仅仅返回一个action对象，也可以返回一个函数

// 3. redux-saga是一个用于管理redux异步操作的中间件，通过创建sagas将所有异步操作集中管理，可用来代替redux-thunk中间件。
// 4. saga负责协调复杂的异步操作
// 5. reduce负责处理action的stage更新
// put(action) 发起一个action到store,创建一条Effect描述信息，提示middleware发起一个action到Store.
// takeEvery(actionTypes,func) 如果有对应的type的action函数，则执行后面的方法func,
// 然后由ui组件从reduce中获取数据并展示

import {
    DEL_TODO_ITEM,
    CHANGE_ITEM_CHECK,
    ADD_NEW_ITEM,
    DEL_CHECKED_ITEM,
    ALL_CHECKED_OR_NOT_ITEM,
    GET_ALL_ITEM,
    REQ_ALL_ITEM,
} from './actionType';

// 获取列表数据
export const getItemListAction = () => ({
    type: REQ_ALL_ITEM,
});

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