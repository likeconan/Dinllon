import { dinaxios } from '../utilities/dinaxios';
import validator from 'validator';
import UserModel from '../models/user.model';



export function getProfile(userid) {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "profile", { userid: userid })
            .then((data) => {
                dispatch({
                    type: 'GET_PROFILE',
                    payload: new UserModel(data).user
                })
            });
    }
}