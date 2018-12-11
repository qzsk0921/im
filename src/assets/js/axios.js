import axios from 'axios';
import common from '@/assets/js/common';

let isLogin = common.getLocalStorage('isLogin');

let p = {
    api: 39,
    ver: '1.0.0',
    client_type: 'h5'
};

var instance = axios.create({
    baseURL: (process.env.NODE_ENV === 'production') ? 'https://mapi.quhepai.com' : 'http://192.168.3.16:8080',
    params: p,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;