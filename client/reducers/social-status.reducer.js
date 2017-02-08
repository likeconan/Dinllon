export default function reducer(state = {
    statusList: [],
    statusObj: {
        textContent: '',
        images: [],
    },
    activeEdit: false,
    textEdited: false
}, action) {
    switch (action.type) {
        case 'SEARCH_LIFE':
            return { ...state, statusList: action.payload }
        case 'ADD_STATUS':
            return {
                ...state,
                statusList: [...state.statusList, action.payload]
            }
        case 'ADD_STATUS_IMAGE': {
            const files = state.statusObj.images.concat(action.payload);
            return {
                ...state,
                statusObj: { ...state.statusObj, images: files },
                activeEdit: true
            }
        }
        case 'EDIT_STATUS_TEXT': {
            var val = action.payload
            var textEdited = val.length > 0;
            return {
                ...state,
                statusObj: { ...state.statusObj, textContent: val },
                textEdited: textEdited
            }
        }
        case 'DELETE_STATUS_IMAGE': {
            const files = state.statusObj.images.filter(s => s.id !== action.payload)
        }

        default:
            return state
    }
}