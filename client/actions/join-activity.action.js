import dinaxios from 'utilities/dinaxios';
import axios from 'axios';
import { showToast } from './toast.action';
import { editJoinedActivity } from './activity.action';
import validator from 'validator';

export function toggleJoinDialog(data) {
    return { type: 'TOGGLE_JOIN_ACTIVITY', payload: data }
}

export function toggleCancelApplyDialog(data) {
    return {
        type: 'TOGGLE_CANCEL_APPLY',
        payload: data
    }
}

export function applyActivity(activity) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join',
            method: 'POST',
            data: activity
        }).then((data) => {
            dispatch(toggleJoinDialog({ open: false }));
            dispatch(editJoinedActivity(
                [{
                    status: data.status,
                    uuid: data.uuid,
                    activityId: data.activityId
                }])
            );
            dispatch(showToast({
                className: 'success-toast',
                message: 'apply_activity_success'
            }));
        });
    }
}

export function approveJoin(data) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join/' + data.joinedId,
            data: {
                status: 2
            },
            method: 'PUT'
        }).then((res) => {
            dispatch({ type: 'APPROVE_JOIN', payload: {} })
            dispatch(editJoinedActivity({ activityId:data.activityId }));
            dispatch(toggleApproveJoinDialog({ open: false }));
        })
    }
}

export function cancelApply(data) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join/' + data.joinedId,
            method: 'DELETE'
        }).then((res) => {
            dispatch(showToast({
                className: 'success-toast',
                message: 'cancel_apply_activity_success'
            }));
            dispatch(editJoinedActivity(data));
            dispatch(toggleCancelApplyDialog({ open: false }));
        })
    }
}

export function editInformEmail(val) {
    return {
        type: 'EDIT_ACTIVITY_JOIN_EMAIL',
        payload: {
            val: val,
            isEmail: validator.isEmail(val)
        }
    }
}


export function toggleApproveJoinDialog(val) {
    return { type: 'TOGGLE_APPROVE_JOIN_DIALOG', payload: val }
}


///////////////////Invite////////////////////


export function toggleInviteDialog(val) {
    return { type: 'TOGGLE_INVITE_DIALOG', payload: val }
}

export function toggleSelectCreate(val) {
    return { type: 'TOGGLE_SELECT_CREATE', payload: val }
}

export function getAvailableActivities(userId) {
    return function (dispatch) {

        var getCreated = dinaxios({
            url: 'activities/available/' + userId
        });
        var getJoined = dinaxios({
            url: 'activities/join/available/' + userId
        });
        axios.all([getCreated, getJoined])
            .then(axios.spread(function (created, joined) {
                dispatch({
                    type: 'GET_AVAILABLE_ACTIVITIES',
                    payload: {
                        created: created,
                        joined: joined.map((data) => {
                            return data.Activity
                        })
                    }
                })
            }))
    }
}