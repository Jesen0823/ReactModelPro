import {put, takeEvery} from 'redux-saga/effects';
import {GET_ALL_ITEM, REQ_ALL_ITEM} from "./actionType";
import {getTodoList} from "../api";

function* fetchAllItem() {
    console.log('--fetchAllItem');
    const result = yield getTodoList();
    console.log(result);
    if (result.success_code === 200){
        const todos = result.items;
        // 数据配发给reduce
        yield put({
            type:GET_ALL_ITEM,
            todos
        });
    }
}

function* mySaga() {
    console.log('--mySaga');
    // sagas接到请求REQ_ALL_ITEM，触发fetchAllItem()去请求数据
    yield takeEvery(REQ_ALL_ITEM, fetchAllItem);
}

export default mySaga;