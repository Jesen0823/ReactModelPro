import {DEL_TODO_ITEM,CHANGE_ITEM_CHECK,ADD_NEW_ITEM} from './actionType';


// 默认数据
const defaultState={
    todos: [
        {id: 1, title: '看书一小时', finished: false},
        {id: 2, title: '跑步40分钟', finished: false},
        {id: 3, title: '完成React学习', finished: false},
        {id: 4, title: '给兰花浇水', finished: false}
    ],
    finishCount: 0
}

export default (state = defaultState,action)=>{
    console.log(state,action);
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
    if (action.type === CHANGE_ITEM_CHECK){
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
    if (action.type === ADD_NEW_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos.push(action.todo);
        return newState;
    }

    return state;
}

