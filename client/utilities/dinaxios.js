import axios from 'axios';
import * as load from '../actions/loading.action';

export var dinaxios = {
    get: (dispatch, url, data, errMsg) => {
        dispatch(load.loading());
        var p = new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
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
            axios.post(url, {
                data: data
            }).then((response) => {
                dispatch(load.loaded());
                resolve(response.data);
            }).catch((err) => {
                dispatch(load.loaded());
                reject(err);
            });
        })
    }
}