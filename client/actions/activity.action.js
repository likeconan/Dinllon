import dinaxios from 'utilities/dinaxios';
import Navigate from 'utilities/navigate';
import { UserModel } from 'models';
import { showToast } from './toast.action';
import validator from 'validator';
import { getUserActivities } from './profile.action';

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
            var act = data.length ?
                {
                    ...data[0],
                    User: new UserModel(data[0].User).user
                } :
                null
            dispatch({
                type: 'GET_SEARCHED_ACTIVITY',
                payload: {
                    activity: act,
                    offset: offset
                }
            })
        })
    }
}

export function editJoinedActivity(data) {
    return function (dispatch) {
        if (Navigate.getCurrentPath().indexOf('/life') >= 0) {
            dispatch({
                type: "EDIT_JOINED_QUICKACTIVITY",
                payload: Array.isArray(data) ? data : []
            })
        } else {
            var activityId = Array.isArray(data) ? data[0].activityId : data.activityId
            dinaxios({
                url: 'activities/one/' + activityId,
            }).then((data) => {
                dispatch({
                    type: "EDIT_JOINED_PROFILE",
                    payload: data
                })

            });
        }
    }
}



