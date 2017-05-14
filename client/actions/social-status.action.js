import dinaxios from 'utilities/dinaxios';
import { UserModel } from 'models';

export function searchLife() {
    return function (dispatch) {
        dinaxios({
            url: 'moments'
        }).then((data) => {
            data = data.map((val, key) => {
                return {
                    ...val,
                    User: new UserModel(val.User).user
                }
            })
            dispatch({
                type: 'SEARCH_LIFE',
                payload: data
            })
        });
    }
}

export function addStatus(status, user) {
    return function (dispatch) {
        dinaxios({
            url: 'moments',
            method: 'POST',
            data: status
        }).then((data) => {
            data.User = user;
            dispatch({
                type: 'ADD_STATUS',
                payload: data
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