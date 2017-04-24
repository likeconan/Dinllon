import dinaxios from 'utilities/dinaxios';
import { showToast } from './toast.action';
import validator from 'validator';

export function openCreateDialog() {
    return { type: 'OPEN_CREATE_ACTIVITY' }
}

export function openJoinDialog(activityId) {
    return { type: 'OPEN_JOIN_ACTIVITY', payload: activityId }
}

export function closeDialog() {
    return { type: 'CLOSE_ACTIVITY_DIALOG' }
}

export function editActivityContent(data) {
    return { type: 'EDIT_ACTIVITY_CONTENT', payload: data }
}

export function addActivityImage(files) {
    return { type: 'ADD_ACTIVITY_IMAGE', payload: files }
}

export function deleteActivityImage(key) {
    return { type: 'DELETE_ACTIVITY_IMAGE', payload: key }
}

export function addActivity(activity) {
    return function (dispatch) {
        dinaxios({
            url: 'activities',
            method: 'POST',
            data: activity
        }).then((data) => {
            dispatch(closeDialog());
            dispatch(showToast({
                className: 'success-toast',
                message: 'activity_create_success'
            }))
            dispatch({
                type: 'ADD_ACTIVITY'
            })
        });
    }
}

export function applyActivity(activity) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join',
            method: 'POST',
            data: activity
        }).then((data) => {
            dispatch(closeDialog());
            dispatch(showToast({
                className: 'success-toast',
                message: 'apply_activity_success'
            }));
        });
    }
}

export function editActivityTime(val) {
    return { type: 'EDIT_ACTIVITY_TIME', payload: val }
}

export function editActivityDate(val) {
    return { type: 'EDIT_ACTIVITY_DATE', payload: val }
}

export function editCost(val) {
    return { type: 'EDIT_ACTIVITY_COST', payload: val }
}
export function editActivityType(val) {
    return { type: 'EDIT_ACTIVITY_TYPE', payload: val }
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

export function searchActivity(offset) {
    return function (dispatch) {
        dinaxios({
            url: 'activities',
            method: 'GET',
            params: {
                offset: offset
            }
        }).then((data) => {
            dispatch({
                type: 'GET_SEARCHED_ACTIVITY',
                payload: {
                    activity: Array.isArray(data)
                        ? data[0]
                        : null,
                    offset: offset
                }
            })
        })
    }
}

export function toggleApproveJoinDialog(val) {
    return {
        type: 'TOGGLE_APPROVE_JOIN_DIALOG',
        payload: val
    }
}

export function approveJoin(id) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join/' + id,
            method: 'PUT'
        }).then((data) => {
            debugger
            dispatch({
                type: 'APPROVE_JOIN',
                payload: {
                }
            })
            dispatch(toggleApproveJoinDialog({ open: false }));
        })
    }
}