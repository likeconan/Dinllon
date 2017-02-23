import { dinaxios } from '../utilities/dinaxios';
import validator from 'validator';


export function getProfile(userid) {
    return function (dispatch) {
        debugger;
        dinaxios
            .get(dispatch, "profile", { userid: userid })
            .then((data) => {
                dispatch({
                    type: 'GET_PROFILE',
                    payload: data
                })
            });
    }
}