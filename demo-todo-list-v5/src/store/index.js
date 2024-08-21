import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

// store,中间件比如saga,reducer 三者建立连接关系
const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga);

export default store;