import {dinaxios} from '../utilities/dinaxios';
import validator from 'validator';

export function userLogin() {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "users")
            .then((data) => {
                dispatch({type: 'USER_LOGIN', payload: data})
            });
    }
}