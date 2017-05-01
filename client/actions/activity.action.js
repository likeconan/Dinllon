import dinaxios from 'utilities/dinaxios';
import { showToast } from './toast.action';
import validator from 'validator';

export function toggleCreateDialog(val) {
    return { type: 'TOGGLE_CREATE_ACTIVITY', payload: val }
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
        dinaxios({ url: 'activities', method: 'POST', data: activity }).then((data) => {
            dispatch(toggleCreateDialog(false));
            dispatch(showToast({ className: 'success-toast', message: 'activity_create_success' }))
            dispatch({ type: 'ADD_ACTIVITY' })
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

export function editJoinedQuickActivity(data) {
    return {
        type: "EDIT_JOINED_QUICKACTIVITY",
        payload: data ? [data] : []
    }
}

