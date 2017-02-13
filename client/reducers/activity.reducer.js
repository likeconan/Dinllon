export default function reducer(state = {
    openCreate: false,
    openJoin: false,
    activity: null,
    activityObj: {
        textContent: null,
        images: [],
        startTime: '12:00',
        startDate: null,
    },
    validated: false,
    countdown: 150,
    textEdited: false
}, action) {
    switch (action.type) {
        case 'OPEN_CREATE_ACTIVITY':
            return {
                ...state,
                openCreate: true,
            };
        case 'OPEN_JOIN_ACTIVITY':
            return {
                ...state,
                openJoin: true,
            };
        case 'CLOSE_ACTIVITY_DIALOG':
            return {
                ...state,
                openCreate: action.payload.openCreate,
                openJoin: action.payload.openJoin,
            }
        case 'EDIT_ACTIVITY_CONTENT':
            var payload = action.payload
            var textEdited = payload.val.length > 0;
            return {
                ...state,
                activityObj: { ...state.activityObj, textContent: payload.val },
                countdown: payload.countdown,
                textEdited: textEdited,
                validated: textEdited && state.activityObj.startDate
            }
        case 'ADD_ACTIVITY_IMAGE':
            var temp = action.payload.map((file, key) => {
                file.id = state.activityObj.images.length + key;
                return file;
            });
            const files = state.activityObj.images.concat(temp);
            return {
                ...state,
                activityObj: { ...state.activityObj, images: files }
            }
        case 'DELETE_ACTIVITY_IMAGE': {
            const files = state.activityObj.images.filter(s => s.id !== action.payload)
            var imgs = { ...state.activityObj, images: files };
            return {
                ...state,
                activityObj: imgs,
            }
        }
        case 'ADD_ACTIVITY': {

        }
        case 'EDIT_ACTIVITY_TIME': {
            return {
                ...state,
                activityObj: { ...state.activityObj, startTime: action.payload }
            }
        }
        case 'EDIT_ACTIVITY_DATE': {

            return {
                ...state,
                activityObj: { ...state.activityObj, startDate: action.payload },
                validated: action.payload && state.textEdited
            }
        }
        case 'GET_SEARCHED_ACTIVITY': {
            return {
                ...state,
                activity: action.payload,
            }
        }
        default:
            return state;
    }
}
