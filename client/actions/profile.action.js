import dinaxios from 'utilities/dinaxios';
import axios from 'axios';
import validator from 'validator';
import UserModel from 'models/user.model';
import { showToast } from './toast.action';



export function getProfile(userId) {
    return function (dispatch) {
        var getProfile = dinaxios({
            url: 'users/id/' + userId
        });
        var getUserMoment = dinaxios({
            url: 'moments/' + userId
        });

        axios.all([getProfile, getUserMoment]).then(axios.spread(function (acct, perms) {
            debugger
            console.log(acct);
        }))
        dinaxios({
            url: 'users/id/' + userId
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

export function getUserMoments(userId) {
    return function (dispatch) {
        dinaxios({
            url: 'moments/' + userId
        }).then((data) => {
            dispatch({
                type: 'GET_USER_MOMENTS',
                payload: data
            })
        });
    }
}

export function getUserActivities(userId) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/' + userId
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

export function toggleDrawer(val) {
    return {
        type: 'TOGGLE_PROFILE_DRAWER',
        payload: val
    }
}