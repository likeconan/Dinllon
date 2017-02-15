import { dinaxios } from '../utilities/dinaxios';

export function searchLife() {
    return function (dispatch) {
        dinaxios
            .get(dispatch, 'statuses')
            .then((data) => {
                dispatch({
                    type: 'SEARCH_LIFE',
                    payload: data
                })
            });
    }
}

export function addStatus(status) {
    return function (dispatch) {
        dinaxios
            .post(dispatch, 'statuses')
            .then((response) => {
                dispatch({
                    type: 'ADD_STATUS',
                    payload: status
                })
            });
    }
}

export function addStatusImage(files) {
    return {
        type: 'ADD_STATUS_IMAGE',
        payload: files
    }
}

export function editStatusText(obj) {
    return {
        type: 'EDIT_STATUS_TEXT',
        payload: obj
    }
}

export function deleteStatusImage(key) {
    return {
        type: 'DELETE_STATUS_IMAGE',
        payload: key
    }
}