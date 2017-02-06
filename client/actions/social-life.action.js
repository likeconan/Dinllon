import { dinaxios } from '../utilities/dinaxios';

export function searchLife() {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({
                    type: 'SEARCH_LIFE',
                    payload: []
                })
            });
    }
}

export function AddStatus(status) {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({
                    type: 'ADD_STATUS',
                    payload: status
                })
            });
    }
}
