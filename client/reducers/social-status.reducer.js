export default function reducer(state = {
    statusList: [],
    textContent: '',
    images: [],
    countdown: 150,
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
                countdown: 150,
                textContent: '', images: []
            }
        case 'ADD_STATUS_IMAGE': {
            var temp = action.payload.map((file, key) => {
                file.id = state.images.length + key;
                return file;
            });
            const files = state.images.concat(temp);
            return {
                ...state,
                images: files,
                activeEdit: true
            }
        }
        case 'EDIT_STATUS_TEXT': {
            var payload = action.payload
            var textEdited = payload.val.length > 0;
            return {
                ...state,
                textContent: payload.val,
                countdown: payload.countdown,
                textEdited: textEdited
            }
        }
        case 'DELETE_STATUS_IMAGE': {
            const files = state.images.filter(s => s.id !== action.payload)
            return {
                ...state,
                images: files,
                activeEdit: files.length > 0
            }
        }

        default:
            return state
    }
}