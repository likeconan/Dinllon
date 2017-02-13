export default function reducer(state = {
    openCreate: false,
    openJoin: false,
    activityObj: {
        textContent: null,
        images: []
    },
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
                textEdited: textEdited
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
        default:
            return state;
    }
}
