export default function reducer(state = {
    className: null
}, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                className: action.payload
            }
        case 'LOADED':
            return {
                ...state,
                className: action.payload
            }
        default:
            return state;
    }
}