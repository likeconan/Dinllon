import dinaxios from 'utilities/dinaxios';
import { showToast } from './toast.action';
import { editJoinedQuickActivity } from './activity.action';
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
            dispatch(editJoinedQuickActivity({ status: data.status, uuid: data.uuid }));
            dispatch(showToast({
                className: 'success-toast',
                message: 'apply_activity_success'
            }));
        });
    }
}

export function approveJoin(id) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join/' + id,
            data: {
                status: 2
            },
            method: 'PUT'
        }).then((data) => {
            dispatch({ type: 'APPROVE_JOIN', payload: {} })
            dispatch(toggleApproveJoinDialog({ open: false }));
        })
    }
}

export function cancelApply(id) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join/delete/' + id,
            method: 'DELETE'
        }).then((data) => {
            dispatch(showToast({
                className: 'success-toast',
                message: 'cancel_apply_activity_success'
            }));
            dispatch(editJoinedQuickActivity());
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