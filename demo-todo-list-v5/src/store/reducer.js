import {
    DEL_TODO_ITEM,
    CHANGE_ITEM_CHECK,
    ADD_NEW_ITEM,
    DEL_CHECKED_ITEM,
    ALL_CHECKED_OR_NOT_ITEM,
    GET_ALL_ITEM
} from './actionType';


// 默认数据
const defaultState = {
    todos: [
        {id: 1, title: '看书一小时', finished: false},
        {id: 2, title: '跑步40分钟', finished: false},
        {id: 3, title: '完成React学习', finished: false},
        {id: 4, title: '给兰花浇水', finished: false}
    ],
    finishCount: 0
}

export default (state = defaultState, action) => {
    console.log(state, action);
    // 0. 获取网络列表数据
    if(action.type === GET_ALL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos = action.todos;
        return newState;
    }
    // 1.单条删除
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        let checkedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id === action.todoId) {
                newState.todos.splice(index, 1);
            }
        });
        // 处理选中
        newState.todos.forEach((todo, index) => {
            if (todo.finished) {
                checkedCount += 1;
            }
        });
        newState.finishCount = checkedCount;
        return newState;
    }
    // 2. 单条勾选
    if (action.type === CHANGE_ITEM_CHECK) {
        const newState = JSON.parse(JSON.stringify(state));
        let checkedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id === action.todoId) {
                todo.finished = action.checked;
            }
            if (todo.finished) {
                checkedCount += 1;
            }
        })
        newState.finishCount = checkedCount;
        return newState;
    }
    // 3. 新增条目
    if (action.type === ADD_NEW_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos.push(action.todo);
        return newState;
    }
    // 4. 删除已勾选
    if (action.type === DEL_CHECKED_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        let tempNoDel = [];
        newState.todos.forEach((todo, index) => {
            if (!todo.finished) {
                tempNoDel.push(todo)
            }
        });
        // 更新状态
        newState.todos = tempNoDel;
        newState.finishCount = 0;
        return newState;
    }
    // 5. 全选反全选
    if (action.type === ALL_CHECKED_OR_NOT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos.forEach((todo, index) => {
            todo.finished = action.checked;
        })
        newState.finishCount = action.checked === true ? newState.todos.length : 0
        return newState;
    }

    return state;
}

