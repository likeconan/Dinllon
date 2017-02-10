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
                statusList: [action.payload, ...state.statusList],
                textEdited: false,
                activeEdit: false,
                statusObj: { textContent: '', images: [] }
            }
        case 'ADD_STATUS_IMAGE': {
            var temp = action.payload.map((file, key) => {
                file.id = state.statusObj.images.length + key;
                return file;
            });
            const files = state.statusObj.images.concat(temp);
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
            var imgs = { ...state.statusObj, images: files };
            return {
                ...state,
                statusObj: imgs,
                activeEdit: imgs.length > 0
            }
        }

        default:
            return state
    }
}