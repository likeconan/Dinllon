export default function reducer(state = {
    popover: {
        open: false,
        anchorEl: null
    }
}, action) {
    switch (action.type) {
        case 'TOGGLE_MESSAGE_POPOVER':
            return {
                ...state,
                popover: action.payload
            };
       
        default:
            return state;
    }
}