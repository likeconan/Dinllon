import {dinaxios} from '../utilities/dinaxios';
import validator from 'validator';
import {Authorize} from '../utilities';

export function userLogin(user) {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "users/mobile", user)
            .then((data) => {
                Authorize.setToken(data.token);
                dispatch({type: 'USER_LOGIN', payload: data.user})
            });
    }
}

export function editMobile(val) {
    return {
        type: 'EDIT_LOGIN_MOBILE',
        payload: {
            val: val,
            isMobile: /^1[3|4|5|8][0-9]\d{8}$/.test(val)
        }
    }
}

export function editPassword(val) {
    return {
        type: 'EDIT_LOGIN_PASSWORD',
        payload: {
            val: val,
            isPassword: true
        }
    }
}