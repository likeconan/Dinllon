import { dinaxios } from '../utilities/dinaxios';


export function openCreateDialog() {
    return {
        type: 'OPEN_CREATE_ACTIVITY'
    }
}

export function openJoinDialog() {
    return {
        type: 'OPEN_JOIN_ACTIVITY'
    }
}

export function closeDialog(data) {
    return {
        type: 'CLOSE_ACTIVITY_DIALOG',
        payload: data
    }
}

export function editActivityContent(data) {
    return {
        type: 'EDIT_ACTIVITY_CONTENT',
        payload: data
    }
}

export function addActivityImage(files) {
    return {
        type: 'ADD_ACTIVITY_IMAGE',
        payload: files
    }
}

export function deleteActivityImage(key) {
    return {
        type: 'DELETE_ACTIVITY_IMAGE',
        payload: key
    }
}

export function addActivity(obj) {
    return {
        type: 'ADD_ACTIVITY',
        payload: obj
    }
}

export function editActivityTime(val) {
    return {
        type: 'EDIT_ACTIVITY_TIME',
        payload: val
    }
}

export function editActivityDate(val) {
    return {
        type: 'EDIT_ACTIVITY_DATE',
        payload: val
    }
}

export function searchActivity() {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "activities")
            .then((data) => {
                dispatch({
                    type: 'GET_SEARCHED_ACTIVITY',
                    payload: data
                })
            });
    }
}