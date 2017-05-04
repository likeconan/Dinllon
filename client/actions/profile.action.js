import dinaxios from 'utilities/dinaxios';
import axios from 'axios';
import validator from 'validator';
import UserModel from 'models/user.model';
import { showToast } from './toast.action';



export function getProfile(userId, isPage) {
    return function (dispatch) {
        var getUserDetail = dinaxios({
            url: 'users/id/' + userId
        });
        var getUserMoment = dinaxios({
            url: 'moments/' + userId
        });
        var getUserActivities = dinaxios({
            url: 'activities/' + userId
        });
        axios.all([getUserDetail, getUserMoment, getUserActivities])
            .then(axios.spread(function (profile, moments, activities, userData) {
                var user = new UserModel(profile.user).user
                dispatch({
                    type: 'GET_PROFILE',
                    payload: {
                        data: {
                            user: user,
                            isOwn: profile.isOwn,
                            moments: moments,
                            activities: activities,
                            userData: {
                                momentCount: 0,
                                activityCount: 0,
                                friendCount: 0,
                                appraiseCount: 0,
                                dislikeCount: 0,
                                lateCount: 0
                            }
                        },
                        isPage: isPage,
                        editingUser: user
                    }
                })
            }))
    }
}

export function getUserDetail(userId) {
    return function (dispatch) {
        dinaxios({
            url: 'users/id/' + userId
        }).then((data) => {
            var user = new UserModel(data.user).user
            dispatch({
                type: 'GET_USER_DETAIL',
                payload: user
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
    return function (dispatch) {
        if (val.toggle) {
            dispatch(getProfile(val.userId));
        }
        dispatch({
            type: 'TOGGLE_PROFILE_DRAWER',
            payload: val
        })
    }
}


export function toggleDeleteActivity(data) {
    return {
        type: 'TOGGLE_DELETE_ACTIVITY_DIALOG',
        payload: data
    }
}

export function deleteActivity(id) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/' + id,
            method: 'DELETE'
        }).then((data) => {
            //dispatch(getUserActivities());
            dispatch(showToast({
                className: 'success-toast',
                message: 'activity_deleted_success'
            }));
            dispatch(toggleDeleteActivity({ open: false }));
        });
    }
}