export default function reducer(state = {
    openCreate: false,
    activity: null,
    offset: 1,
    activityObj: {
        textContent: null,
        images: [],
        startTime: '12:00',
        cost: 0,
        type: 1,
        startDate: null
    },
    disableCost: false,
    validatedCreate: false,
    countdown: 150,
    textEdited: false
}, action) {
    switch (action.type) {
        case 'toggleCreateDialog':
            return {
                ...state,
                openCreate: action.payload
            };
        case 'EDIT_ACTIVITY_CONTENT':
            {
                var payload = action.payload
                var textEdited = payload.val.length > 0;
                return {
                    ...state,
                    activityObj: {
                        ...state.activityObj,
                        textContent: payload.val
                    },
                    countdown: payload.countdown,
                    textEdited: textEdited,
                    validatedCreate: textEdited && state.activityObj.startDate
                }
            }
        case 'ADD_ACTIVITY_IMAGE':
            {
                var temp = action
                    .payload
                    .map((file, key) => {
                        file.id = state.activityObj.images.length + key;
                        return file;
                    });
                const files = state
                    .activityObj
                    .images
                    .concat(temp);
                return {
                    ...state,
                    activityObj: {
                        ...state.activityObj,
                        images: files
                    }
                }
            }
        case 'DELETE_ACTIVITY_IMAGE':
            {
                const files = state
                    .activityObj
                    .images
                    .filter(s => s.id !== action.payload)
                var imgs = {
                    ...state.activityObj,
                    images: files
                };
                return {
                    ...state,
                    activityObj: imgs
                }
            }
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activityObj: {
                    textContent: null,
                    images: [],
                    startTime: '12:00',
                    cost: 0,
                    type: 1,
                    startDate: null
                },
                textEdited: false,
                countdown: 150,
                validatedCreate: false
            }
        case 'EDIT_ACTIVITY_TIME':
            return {
                ...state,
                activityObj: {
                    ...state.activityObj,
                    startTime: action.payload
                }
            }
        case 'EDIT_ACTIVITY_DATE':
            return {
                ...state,
                activityObj: {
                    ...state.activityObj,
                    startDate: action.payload
                },
                validatedCreate: action.payload && state.textEdited
            }
        case 'EDIT_ACTIVITY_COST':
            return {
                ...state,
                activityObj: {
                    ...state.activityObj,
                    cost: action.payload
                }
            }
        case 'EDIT_ACTIVITY_TYPE':
            return {
                ...state,
                activityObj: {
                    ...state.activityObj,
                    type: action.payload
                },
                disableCost: action.payload !== 1
            }
        case 'GET_SEARCHED_ACTIVITY':
            return {
                ...state,
                activity: action.payload.activity,
                offset: action.payload.offset
                    ? action.payload.offset + 1
                    : 1
            }

        default:
            return state;
    }
}
