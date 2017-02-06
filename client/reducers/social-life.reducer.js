export default function reducer(state = {
    status: []
}, action) {
    switch (action.type) {
        case 'SEARCH_LIFE':
            return { ...state, status: action.payload }
            break;
        case 'ADD_STATUS':
            return {
                ...state,
                status: [...state.status, action.payload]
            }
        default:
            return state
    }
}