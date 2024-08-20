import {DEL_TODO_ITEM, CHANGE_ITEM_CHECK, ADD_NEW_ITEM,DEL_CHECKED_ITEM,ALL_CHECKED_OR_NOT_ITEM} from './actionType';

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
export const getDelCheckedItemAction = ()=>({
    type:DEL_CHECKED_ITEM,
})

// 全选或反选所有任务
export const getCheckedAllItemAction = (checked)=>({
    type:ALL_CHECKED_OR_NOT_ITEM,
    checked
})