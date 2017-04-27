export function toggleJoinDialog(data) {
    return { type: 'TOGGLE_JOIN_ACTIVITY', payload: data }
}

export function applyActivity(activity) {
    return function (dispatch) {
        dinaxios({
            url: 'activities/join',
            method: 'POST',
            data: activity
        }).then((data) => {
            dispatch(toApplyDialog());
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
            method: 'PUT'
        }).then((data) => {
            debugger
            dispatch({ type: 'APPROVE_JOIN', payload: {} })
            dispatch(toggleApproveJoinDialog({ open: false }));
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