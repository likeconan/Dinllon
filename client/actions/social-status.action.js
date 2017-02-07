import { dinaxios } from '../utilities/dinaxios';

export function searchLife() {
    return function (dispatch) {
        dinaxios
            .get(dispatch, "http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({
                    type: 'SEARCH_LIFE',
                    payload: [{
                        textContent: 'first lala I created this',
                        imgContent: 'https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/bcae52c5-904c-4e25-8763-bb56342a8329.jpeg;',
                        user: {
                            nickName: 'FirstTry',
                            goingOn: 'I wanna play dota'
                        }
                    }]
                })
            });
    }
}

export function addStatus(status) {
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
