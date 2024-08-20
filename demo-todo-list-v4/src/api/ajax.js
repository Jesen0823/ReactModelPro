import axios from "axios";
// 网络请求
export default function ajax(url = '', params = {}, type = 'GET') {
    let promise;
    // 1.返回promise对象
    return new Promise((resolve, reject) => {
        // 判断请求方式
        if ('GET' === type.toUpperCase()) {
            //拼接字符串
            let paramsStr = '';
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            url += '?' + paramsStr;
            // 发起get请求
            promise = axios.get(url);
        } else if ('POST' === type.toUpperCase()) {
            promise = axios.post(url, params);
        }
        // 返回结果
        promise.then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })
}