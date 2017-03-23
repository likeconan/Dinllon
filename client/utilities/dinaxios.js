import axios from 'axios';
import * as load from '../actions/loading.action';
import Authorize from './authorize';
import store from '../store';

//const api_url = 'https://private-29c881-dinllonapi.apiary-mock.com/';
const api_url = 'http://localhost:9000/';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: 'http://localhost:9000/',
            method: obj.method ? obj.method : 'GET',
            params: obj.params,
            data: obj.data,
            headers: {
                'x-access-token': Authorize.getToken()
            }
        }).then((response) => {
            store.dispatch(load.loaded());
            if (response.data.isSuccess) {
                resolve(response.data.data);
            } else {
                //need to be do with toast
                console.log(response.data.errors);
                reject(response.data.errors);
            }
        }).catch((err) => {
            store.dispatch(load.loaded());
            //need to be do with toast
            console.log(err);
            reject(err);
        });
    })
    return p;
}
