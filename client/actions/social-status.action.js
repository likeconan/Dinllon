import dinaxios from 'utilities/dinaxios';

export function searchLife() {
    return function (dispatch) {
        dinaxios({
            url: 'moments'
        }).then((data) => {
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