import dinaxios from '../utilities/dinaxios';
import validator from 'validator';
import UserModel from '../models/user.model';



export function getProfile(userid) {
    return function (dispatch, getState) {
        dinaxios({
            url: 'users/id/' + userid
        }).then((data) => {
            dispatch({
                type: 'GET_PROFILE',
                payload: {
                    user: new UserModel(data).user,
                    isOwn: getState().user.loggedUser.uuid === userid
                }
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

export function saveProfile(user, userId) {
    return function (dispatch) {
        dinaxios({
            url: 'users/id/' + userId,
            method: 'PUT',
            data: user
        }).then((data) => {
            toggleEditProfile();
            dispatch({
                type: 'SAVE_PROFILE',
                payload: {
                    user: new UserModel(data).user,
                }
            });
        });


    }
}