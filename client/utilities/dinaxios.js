import axios from 'axios';
import * as load from '../actions/loading.action';
import { showToast } from '../actions/toast.action';
import Authorize from './authorize';
import Navigate from './navigate';
import Translate from './translate';
import store from '../store';

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
                store.dispatch(showToast({
                    className: 'error-toast',
                    message: Translate.instant(response.data.errors[0].message)
                }))
                console.log(response.data.errors);
                reject(response.data.errors);
            }
        }).catch((err) => {
            store.dispatch(load.loaded());
            //need to be do with toast
            if (err.response.status === 403) {
                store.dispatch(showToast({
                    className: 'warn-toast',
                    message: Translate.lang.login_required,
                    autoHideDuration: 5000,
                    action: Translate.lang.login,
                    click: () => {
                        Navigate.goToLogin();
                    }
                }))
            } else {
                store.dispatch(showToast({
                    className: 'error-toast',
                    message: Translate.lang.unknow_error
                }))
            }
            console.log(err);
            reject(err);
        });
    })
    return p;
}
