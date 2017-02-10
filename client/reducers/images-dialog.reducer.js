export default function reducer(state = {
    open: false,
    images: []
}, action) {
    switch (action.type) {
        case 'SHOW_IMAGE_DIALOG':
            return {
                ...state,
                open: true,
                images: action.payload
            };
        case 'CLOSE_IMAGE_DIALOG':
            return {
                ...state,
                open: false
            }
        default:
            return state;
    }
}