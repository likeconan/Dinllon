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
            .get(dispatch, "http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({
                    type: 'GET_SEARCHED_ACTIVITY',
                    payload: {
                        textContent: 'I am going to have a jog around in central park.Anyone who wants to share the workout?',
                        imgContent: 'https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/bcae52c5-904c-4e25-8763-bb56342a8329.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;',
                        startTime: '12:00',
                        startDate: new Date(),
                        user: {
                            nickName: 'Conan',
                            goingOn: 'I wanna play dota'
                        }
                    }
                })
            });
    }
}