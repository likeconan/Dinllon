import dinaxios from '../utilities/dinaxios';
import validator from 'validator';

export function openCreateDialog() {
    return { type: 'OPEN_CREATE_ACTIVITY' }
}

export function openJoinDialog() {
    return { type: 'OPEN_JOIN_ACTIVITY' }
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
            console.log(data);
            dispatch(closeDialog());
            dispatch({
                type: 'ADD_ACTIVITY'
            })
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

export function editFriendEmail(val) {
    return {
        type: 'EDIT_ACTIVITY_JOIN_EMAIL',
        payload: {
            val: val,
            isEmail: validator.isEmail(val)
        }
    }
}

export function searchActivity() {
    return function (dispatch) {
        dinaxios({ url: 'activities', method: 'GET' }).then((data) => {
            dispatch({
                type: 'GET_SEARCHED_ACTIVITY',
                payload: Array.isArray(data)
                    ? data[0]
                    : null
            })
        })
    }
}