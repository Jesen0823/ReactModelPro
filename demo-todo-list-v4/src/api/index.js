import ajax from "./ajax";

const BASE_URL = '/api';

// 请求todo列表
export const getTodoList =()=>ajax(BASE_URL+'/todos');