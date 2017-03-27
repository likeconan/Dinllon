export default function reducer(state = {
    className: null,
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                className: action.payload,
                loading: true
            }
        case 'LOADED':
            return {
                ...state,
                className: action.payload,
                loading: false
            }
        default:
            return state;
    }
}