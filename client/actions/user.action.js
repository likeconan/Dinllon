import dinaxios from '../utilities/dinaxios';
import validator from 'validator';
import { Authorize, Navigate } from '../utilities';

export function userLogin(user) {
    return function (dispatch) {
        dinaxios({
            url: 'users/mobile',
            params: user
        }).then((data) => {
            Authorize.setToken(data.token);
            Navigate.goToSocialLife();
            dispatch({ type: 'USER_LOGIN', payload: data.user })
        });
    }
}

export function userRegister(user) {
    return function (dispatch) {
        dinaxios({
            url: 'users',
            method: 'POST',
            data: user
        }).then((data) => {
            Authorize.setToken(data.token);
            Navigate.goToSocialLife();
            dispatch({ type: 'USER_REGISTER', payload: data.user })
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
            isPassword: validator.isLength(val, { min: 6 })
        }
    }
}

export function editRegisterMobile(val) {
    return {
        type: 'EDIT_REGISTER_MOBILE',
        payload: {
            val: val,
            isMobile: /^1[3|4|5|8][0-9]\d{8}$/.test(val)
        }
    }
}

export function editRegisterPassword(val) {
    return {
        type: 'EDIT_REGISTER_PASSWORD',
        payload: {
            val: val,
            isPassword: validator.isLength(val, { min: 6 })
        }
    }
}


export function editSMS(val) {
    return {
        type: 'EDIT_REGISTER_SMS',
        payload: {
            val: val,
            isSMS: validator.isNumeric(val)
        }
    }
}

export function getLoggedUser() {
    return function (dispatch) {
        dinaxios({
            url: 'users/authorize'
        }).then((data) => {
            dispatch({ type: 'GET_USER_AUTHORIZE', payload: data })
        });
    }
}

export function logOut() {
    Authorize.setToken(null);
    return {
        type: 'USER_LOGOUT'
    }
}