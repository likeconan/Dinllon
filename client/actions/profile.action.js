import dinaxios from '../utilities/dinaxios';
import validator from 'validator';
import UserModel from '../models/user.model';
import { showToast } from './toast.action';



export function getProfile(userid) {
    return function (dispatch) {
        dinaxios({
            url: 'users/id/' + userid
        }).then((data) => {
            dispatch({
                type: 'GET_PROFILE',
                payload: {
                    user: new UserModel(data.user).user,
                    isOwn: data.isOwn
                }
            })
        });
    }
}

export function getUserMoments(userid) {
    return function (dispatch) {
        dinaxios({
            url: 'moments/' + userid
        }).then((data) => {
            dispatch({
                type: 'GET_USER_MOMENTS',
                payload: data
            })
        });
    }
}

export function getUserActivities(userid) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/' + userid
        }).then((data) => {
            dispatch({
                type: 'GET_USER_ACTIVITIES',
                payload: data
            })
        });
    }
}

export function toggleEditProfile() {
    return {
        type: 'TOGGLE_EDIT_PROFILE'
    }
}

export function editNickName(val) {
    return {
        type: 'EDIT_NICKNAME',
        payload: val
    }
}

export function editGoingOn(val) {
    return {
        type: 'EDIT_GOINGON',
        payload: val
    }
}

export function editWork(val) {
    return {
        type: 'EDIT_WORK',
        payload: val
    }
}

export function editSchool(val) {
    return {
        type: 'EDIT_SCHOOL',
        payload: val
    }
}

export function editBirthday(val) {
    return {
        type: 'EDIT_BIRTHDAY',
        payload: val
    }
}

export function saveProfile(user) {
    return function (dispatch) {
        dinaxios({
            url: 'users/editprofile',
            method: 'PUT',
            data: user
        }).then(() => {

            dispatch(toggleEditProfile());

            dispatch(showToast({
                className: 'success-toast',
                message: 'save_profile_success'
            }));
            var temp = new UserModel(user).user;
            dispatch({
                type: 'USER_LOGIN_REGISTER',
                payload: temp
            })
            dispatch({
                type: 'SAVE_PROFILE',
                payload: {
                    user: temp,
                }
            });
        });


    }
}