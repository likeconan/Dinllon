export default function reducer(state = {
    open: false,
    msgObj: {
        message: '',
        className: '',
    }
}, action) {
    switch (action.type) {
        case 'SHOW_TOAST':
            return {
                ...state,
                open: true,
                msgObj: action.payload
            };

        default:
            return state;
    }
}