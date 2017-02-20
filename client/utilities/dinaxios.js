import axios from 'axios';
import * as load from '../actions/loading.action';

const api_url = 'https://private-29c881-dinllonapi.apiary-mock.com/';

export var dinaxios = {
    get: (dispatch, url, data, errMsg) => {
        dispatch(load.loading());
        var p = new Promise((resolve, reject) => {
            axios.get(api_url + url, {
                params: data,
            }).then((response) => {
                dispatch(load.loaded());
                resolve(response.data);
            }).catch((err) => {
                dispatch(load.loaded());
                reject(err);
            });
        })
        return p;
    },
    post: (dispatch, url, data, errMsg) => {
        dispatch(load.loading());
        var p = new Promise((resolve, reject) => {
            axios.post(api_url + url, {
                data: data
            }).then((response) => {
                dispatch(load.loaded());
                resolve(response.data);
            }).catch((err) => {
                dispatch(load.loaded());
                reject(err);
            });
        })
        return p;
    }
}